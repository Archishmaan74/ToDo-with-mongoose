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

router.post("/addtask",async(req,res)=>{
    const { sno, task, date, time } = req.body;

  try{
    const newTask = new TaskModel({
        sno,
        task,
        date,
        time
    });
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
  }catch(err){
    res.status(400).json({ message: err.message });
  }
})


router.post("/edittask", async (req, res) => {
  const { sno, task, date, time } = req.body;

  try {
      const updatedTask = await TaskModel.findOneAndUpdate(
          { sno: sno },
          { task, date, time },
          { new: true }
      );

      if (!updatedTask) {
          return res.status(404).json({ message: "Task not found" });
      }

      res.json(updatedTask);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

module.exports = router