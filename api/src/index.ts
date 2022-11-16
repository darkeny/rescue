import express from 'express'
import multer from 'multer'
import morgan from 'morgan'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(morgan("dev"))
app.use(multer)

app.use(cors)

app.listen(3000, () => {
console.log("Server Running");

})