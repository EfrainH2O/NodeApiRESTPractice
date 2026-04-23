import { Router } from "express"
import { delUser, getUser, getUsers, postUser, putUser } from "../controllers/users.controllers.js"
const router = Router()

router.get("/users", getUsers)
router.get("/user", getUser)
router.post("/users", postUser)
router.put("/user", putUser)
router.delete("/user", delUser)




export default router