import type { NextFunction, Request, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import config from "../config";
import { pool } from "../db";
import type { ROLES } from "../types";

const auth = (...roles: ROLES[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {

        try {
            // 1. Extract token from request headers
            const token = req.headers.authorization;

            // 2. Check if the token exists
            if (!token) {
                res.status(401).json({
                    success: false,
                    message: "Access denied. Authorization token is missing.",
                });
            }

            // 3. Verify and decode the JWT token
            const decoded = jwt.verify(
                token as string,
                config.secret as string,
            ) as JwtPayload;

            // 4. Query database to find user by decoded email
            const userData = await pool.query( `
                SELECT * FROM users 
                WHERE email=$1   
            `,
                [decoded.email],
            );

            // 5. Handle case when user not found
            if (userData.rows.length === 0) {
                res.status(404).json({
                    success: false,
                    message: "No user account associated with this token.",
                });
            }

            // 6. Extract user record from query result
            const user = userData.rows[0];

            // 7. Check if user account is active
            if (!user?.is_active) {
                res.status(403).json({
                    success: false,
                    message: "Access denied. User account is inactive.",
                });
            }

            // 8. Enforce role-based access control
            if (roles.length && !roles.includes(user.role)) {
                res.status(403).json({
                    success: false,
                    message: "Access denied. Your role does not have permission to access this resource.",
                });
            }

            // 9. Attach decoded payload to request object for downstream usage
            req.user = decoded; // req : { user : {} }

            // 10. Pass control to next middleware
            next();
        } catch (error) {
            next(error);
        }
    };
};

export default auth;