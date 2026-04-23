import "dotenv/config" 
import cors from "cors"
import express from "express"
import morgan from "morgan"
import index_Routes from "./routes/index.routes.js"
import { connectDB } from "./utils/db.js"
import loginRouter from "./routes/login.routes.js"
import userRouter from "./routes/user.routes.js"

const app = express()
app.use(express.json())
connectDB()
app.use(cors())
app.use(morgan("dev"))
app.use(index_Routes)
app.use(loginRouter)
app.use(userRouter)
app.listen(process.env.PORT, console.log("Init at Port: ", process.env.PORT))
