import { Router } from "express";
import { createUserController, deleteUserController, listUserController, updateUserController } from "../controllers/userController";
import verifyUserMeddleware from "../middlewares/verifyUserMeddleware";


const userRoutes = Router();

userRoutes.post("", createUserController)
userRoutes.get("", listUserController )

// userRoutes.get("/:userId/contacts" )

userRoutes.patch("/:id", updateUserController )
userRoutes.delete("/:id", deleteUserController)


export default userRoutes