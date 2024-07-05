import { Router } from "express";
import { tryCatchWrapper } from "../middelwares/controllerWrapper.js";
import { createUser, loginUser } from "../controller/userController.js";
const router = Router()
router.post('/register',tryCatchWrapper(createUser));
router.post('/login',tryCatchWrapper(loginUser))


export {router as userRouter}