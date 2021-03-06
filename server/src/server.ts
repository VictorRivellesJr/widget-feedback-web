import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { routes } from "./routes"

const app = express()

app.use(cors({ origin: "*" }))
app.use(bodyParser.json({ limit: "5mb" }))
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log("HTTP server running!")
})
