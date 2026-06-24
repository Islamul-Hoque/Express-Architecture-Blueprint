import express, { type Application, type Request, type Response } from "express";
import { userRoute } from "./modules/user/user.route";
import { profileRoute } from "./modules/profile/profile.route";
import { authRoute } from "./modules/auth/auth.route";
import logger from "./middleware/logger";
import CookieParser from "cookie-parser";
import cors from "cors";
import globalErrorHandler from "./middleware/globalErrorHandler";

const app: Application = express();

// Built-in middleware: JSON, text, and URL-encoded body parsing
app.use(CookieParser());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
        origin: ["http://localhost:3000", "https://express-architecture-blueprint.app.vercel"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
        maxAge: 600,
    }),
);


// Custom logger middleware
app.use(logger);

// Root route handler (GET)
app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        "status": true,
        "message": "Express Architecture Blueprint API is live and ready to handle requests",
        "version": "1.0.0",
        "author": "Islamul Hoque",
        "timestamp": "Tuesday, 23 Jun 2026, 9:07 AM BST",
        "environment": "development",
        "uptime": "15234ms",
        "server": "Express.js & TypeScript",
        "docs": "/api/docs",
        "health": "healthy"
    })
})

// Application routing setup
app.use("/api/users", userRoute)
app.use("/api/profile", profileRoute);
app.use("/api/auth", authRoute);

// Global Error Handling Middleware
app.use(globalErrorHandler);
export default app;