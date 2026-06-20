import express, { type Application, type Request, type Response } from "express";

const app: Application = express();
const port = process.env.PORT || 3000;

// Parse JSON payloads from incoming requests
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({extended: true}));

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        status: "success",
        message: "Express Architecture Blueprint API is live and ready to handle requests",
        version: "1.0.0",
        author: "Islamul Hoque"
    });
});

app.post("/", (req: Request, res: Response) => {
    const {name, email, password} = req.body
    res.status(201).json({
        status: "success",
        message: "Post created",
        data: {name, email}
    })
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
