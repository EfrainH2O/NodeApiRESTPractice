import express from "express"
import morgan from "morgan"
import index_Routes from "./routes/index.routes.js"

const PORT = 3200
const app = express()

app.use(morgan("dev"))
app.use(index_Routes)

app.listen(PORT, console.log("Init at Port: ", PORT))