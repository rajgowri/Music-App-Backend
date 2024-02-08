const express = require("express")
const musicModel = require("../model/musicModel")

const router = express.Router()

router.post("/add",async(req,res)=>{

    let data = req.body
    let music = new musicModel(data)
    let result = await music.save()

    res.json(
        {
            status:"success"
        }
    )
})

module.exports=router