import type { Request, Response } from "express";
import { pool } from "../../db";
import { userService } from "./user.service";
import sendResponse from "../../utility/sendResponse";

// New user Create ==> "POST" 
const createUser = async (req: Request, res: Response) => {
    try {
        const result = await userService.createUserIntoDB(req.body);

        // Response
        sendResponse(res, {
            statusCode: 201,
            success: true,
            message: "User Created successfully!",
            data: result.rows[0],
        });
    } catch (error: any) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            error: error,
        });
    }
}

// "GET" All User
const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await userService.getAllUsersFromDB()

        // Response
        sendResponse(res, {
            statusCode: 200,
            success: true,
            message: "Users retrieved successfully!",
            data: result.rows,
        });
    } catch (error: any) {
        sendResponse(res, {
            statusCode: 500,
            success: false,
            message: error.message,
            error: error,
        });
    }
}

// "GET" Single user
const getSingleUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await userService.getSingleUserFromDB(id as string);

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
}

// Update user info using "PUT" method
const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await userService.updateUserFromDB(req.body, id as string);

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
}

// "DELETE" a user
const deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await userService.deleteUserFromDB(id as string);

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
}


export const userController = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};