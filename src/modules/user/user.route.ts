import { Router, type Request, type Response } from "express";
import { pool } from "../../db";
import { userController } from "./user.controller";

const router = Router();

// New user Create ==> "POST" 
router.post("/", userController.createUser);

// "GET" All User
router.get("/", userController.getAllUsers);

// "GET" Single user
router.get("/:id", userController.getSingleUser);

// Update user info using "PUT" method
router.put("/:id", userController.updateUser);

// "DELETE" a user
router.delete("/:id", userController.deleteUser);


export const userRoute = router;