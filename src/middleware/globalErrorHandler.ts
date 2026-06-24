import type { NextFunction, Request, Response } from "express";
import config from "../config";

const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction,
) => {

    // Custom formatted timestamp
    const formattedTime = new Date().toLocaleString("en-US", {
        weekday: "long",
        day: "2-digit", 
        month: "short",   
        year: "numeric",   
        hour: "2-digit", 
        minute: "2-digit",
        hour12: true,
    });

    // Default status code
    const statusCode = err.statusCode || 500;

    // Log error 
    console.error(`[${formattedTime}] ${err.message}`);

    res.status(statusCode).json({
        success: false,
        message: err.message || "Internal Server Error",

        // Only show stack in development
        ...(config.node_env === "development" && { stack: err.stack }),

        // Optional: validation errors
        errors: err.errors || undefined,
    });
};

export default globalErrorHandler;