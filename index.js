import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/connectDB.js"
import bookRoutes from './routes/bookRoutes.js'
import morgan from "morgan"
const app = express()
dotenv.config()

app.use(morgan("dev"))
app.use(express.json())
app.use('/api', bookRoutes)

connectDB();

app.get("/" , (req , res) => {
    console.log("Hello World")
    res.send("Hello World")
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port:  http://127.0.0.1:${process.env.PORT}`)
}) 