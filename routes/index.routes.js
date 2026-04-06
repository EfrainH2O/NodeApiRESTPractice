import { Router } from "express"
import { go, gogo, gogogo, home} from "../controllers/index.controllers.js"

const router = Router()

router.get("/go",go)

router.get("/gogo",gogo)

router.get("/gogogo",gogogo)
router.get("/", home)

export default router