import express, { type Application, type Request, type Response } from "express";
import config from "./config";
import { initDB, pool } from "./db";

const app: Application = express();
const port = config.port;

// Parse JSON payloads from incoming requests
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));




// Root route ==> "GET" 
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: "Express Architecture Blueprint API is live and ready to handle requests",
        version: "1.0.0",
        author: "Islamul Hoque"
    });
});

// New user Create ==> "POST" 
app.post("/api/users", async (req: Request, res: Response) => {
    const { name, email, password, age } = req.body

    try {
        const result = await pool.query(`
            INSERT INTO users(name,email,password,age) VALUES($1,$2,$3,$4) 
            RETURNING *
            `,
            [name, email, password, age],
        );

        res.status(201).json({
            success: true,
            message: "User Created successfully!",
            data: result.rows[0]
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
});

// "GET" All User
app.get("/api/users", async (req: Request, res: Response) => {
    try {
        const result = await pool.query(`
            SELECT * FROM users  
        `);
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully!",
            data: result.rows,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
});


// "GET" Single user
app.get("/api/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await pool.query(`
            SELECT * FROM users WHERE id=$1  
        `, [id],
        );

        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User Not found!",
                data: {},
            });
        }

        res.status(200).json({
            success: true,
            message: "User retrieved successfully!",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
});


// Update user info using "PUT" method
app.put("/api/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, password, age, is_active } = req.body;

    try {
        const result = await pool.query(`
            UPDATE users 
            SET name=COALESCE($1,name), password=COALESCE($2,password), age=COALESCE($3,age), is_active=COALESCE($4,is_active) 
            WHERE id=$5 RETURNING *
            `,
            [name, password, age, is_active, id],
        );

        // if id not found
        if (result.rows.length === 0) {
            res.status(404).json({
                success: false,
                message: "User Not found!",
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully!",
            data: result.rows[0],
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
});


// "DELETE" a user
app.delete("/api/users/:id", async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await pool.query( `
            DELETE FROM users WHERE id=$1 
        `,
        [id],
        );

        // if id not found
        if (result.rowCount === 0) {
            res.status(404).json({
                success: false,
                message: "User Not found!",
            });
        }

        // Response
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: {},
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
});

export default app;
