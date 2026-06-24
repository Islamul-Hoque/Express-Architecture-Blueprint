import { Router } from "express";
import { userController } from "./user.controller";
import auth from "../../middleware/auth";
import { USER_ROLE } from "../../types";

const router = Router();

// New user Create ==> "POST" 
router.post("/", userController.createUser);

// "GET" All User
router.get("/", auth(USER_ROLE.admin, USER_ROLE.agent, USER_ROLE.user), userController.getAllUsers);

// "GET" Single user
router.get("/:id", userController.getSingleUser);

// Update user info using "PUT" method
router.put("/:id", userController.updateUser);

// "DELETE" a user
router.delete("/:id", userController.deleteUser);


export const userRoute = router;