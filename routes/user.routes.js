import { Router } from "express"
import { delUser, getUser, getUsers, putUser } from "../controllers/users.controllers.js"
const router = Router()

router.get("/users", getUsers)
router.get("/users", getUser)
router.post("/users", putUser)
router.delete("/user", delUser)




export default router