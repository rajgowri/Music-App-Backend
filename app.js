const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const musicRouter = require("./controllers/musicRouter")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://gowri090:gowri2510@cluster0.37wleuc.mongodb.net/musicDB?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})

app.use("/api/music",musicRouter)

app.listen(3001,()=>{
    console.log("server running...")
})