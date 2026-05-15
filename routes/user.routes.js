import { Router } from "express"
import { delUser, getUser, getUsers, postUser, putUser, migrateUser } from "../controllers/users.controllers.js"
const router = Router()

router.get("/users", getUsers)
router.get("/user", getUser)
router.post("/users", postUser)
router.post("/user/migrate", migrateUser)
router.put("/user", putUser)
router.delete("/user", delUser)




export default router