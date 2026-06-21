import express, { type Application, type Request, type Response } from "express";
import { userRoute } from "./modules/user/user.route";

const app: Application = express();


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


// User Router
app.use("/api/users", userRoute)

export default app;