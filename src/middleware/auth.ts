import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config";
import { pool } from "../db";
import type { ROLES } from "../types";

const auth = (...roles: ROLES[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
    
        try {
            const token = req.headers.authorization;

            // 1. Check if the token exists
            if (!token) {
                res.status(401).json({
                    success: false,
                    message: "Access denied. Authorization token is missing.",
                });
            }

            // 2. Verify the token
            const decoded = jwt.verify(
                token as string,
                config.secret as string,
            ) as JwtPayload;

            // 3. Find the user into database
            const userData = await pool.query( `
                SELECT * FROM users 
                WHERE email=$1   
            `,
                [decoded.email],
            );

            if (userData.rows.length === 0) {
                res.status(404).json({
                    success: false,
                    message: "No user account associated with this token.",
                });
            }

            // namespace Express ==> user property create
            const user = userData.rows[0];

            // 4. If the user active or not?
            if (!user?.is_active) {
                res.status(403).json({
                    success: false,
                    message: "Access denied. User account is inactive.",
                });
            }

        //     if (roles.length && !roles.includes(user.role)) {
        //         res.status(403).json({
        //             success: false,
        //             message: "Forbidden!!,This role have no access!",
        //         });
        //     }

        //     req.user = decoded; // req : { user : {} }

            next();
        } catch (error) {
            next(error);
        }
    };
};

export default auth;