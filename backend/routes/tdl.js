let express = require('express')
let router = express.Router()
let mongoose = require('mongoose')

let TaskSchema = mongoose.Schema({
    sno: Number,
    task: String,
    date: String,
    time: String
})

let TaskModel = mongoose.model("tasks", TaskSchema)

router.get("/display",async(req,res)=>{
    res.send(await TaskModel.find({}))
})

module.exports = router