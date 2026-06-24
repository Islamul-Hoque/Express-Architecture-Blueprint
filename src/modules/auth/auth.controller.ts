import type { Request, Response } from "express";
import { authService } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
    try {
        const result = await authService.loginUserIntoDB(req.body);

        // Refresh Token
        const { refreshToken } = result;

        res.cookie("refreshToken", refreshToken, {
            secure: false, // In production => True
            httpOnly: true,
            sameSite: "lax",
        });

        // Response
        res.status(200).json({
            success: true,
            message: "User login successfully!",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: error.message,
            error: error,
        });
    }
};




export const authController = {
    loginUser,
};