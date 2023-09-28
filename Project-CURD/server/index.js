const express = require("express")
const cors = require("cors");
const mongoose = require("mongoose")
const userRouter = require("./routes/userRouter")

const app = express();

app.use(cors());
app.use(express.json());




mongoose.connect("mongodb://127.0.0.1:27017/Curd_1")
    .then(() => {
        console.log("Database connected")
        app.listen(3001, console.log("server connected port num 3001"))
    })
    .catch(err => console.log(err))


app.use(userRouter)
