import { Router } from "express"
import { logInFunction } from "../controllers/login.controllers.js"
const router = Router()

router.post("/login", logInFunction)

export default router