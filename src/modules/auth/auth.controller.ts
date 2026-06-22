import type { Request, Response } from "express";
import { authService } from "./auth.service";

const loginUser = async (req: Request, res: Response) => {
    // try {
    //     const result = await authService.loginUserIntoDB(req.body);

    //     // Response
    //     res.status(200).json({
    //         success: true,
    //         message: "User retrieved successfully!",
    //         data: result,
    //     });
    // } catch (error: any) {
    //     res.status(500).json({
    //         success: false,
    //         message: error.message,
    //         error: error,
    //     });
    // }
};

export const authController = {
    loginUser,
};