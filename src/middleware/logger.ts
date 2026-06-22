import type { NextFunction, Request, Response } from "express";
import fs from "fs";

const logger = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();

    res.on("finish", () => {
        const now = new Date();
        const formattedTime = new Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        }).format(now);

        const duration = Date.now() - start;
        const status = res.statusCode;

        const logMessage = `Method: ${req.method} | URL: ${req.url} | Status: ${status} | Duration: ${duration}ms | Time: ${formattedTime}\n`;

        console.log(logMessage);

        fs.appendFile("logger.txt", logMessage, (err) => {
            if (err) {
                console.error("Failed to write log:", err);
            }
        });
    });

    next();
}

export default logger;