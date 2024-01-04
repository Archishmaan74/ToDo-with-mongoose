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
    res.send(await TaskModel.find())
})

router.get('/displayone/:sno', async (req, res) => {
    try {
        const task = await TaskModel.findOne({ sno: parseInt(req.params.sno) });
        
        if (!task) {
            return res.status(404).send("Task not found");
        }

        console.log("Fetching one task...");
        res.send(task);
    } catch (err) {
        console.log("Cannot fetch one task:", err);
        res.status(500).send("Internal Server Error");
    }
});

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

router.post("/deletetask", async (req, res) => {
  const { sno } = req.body;

  try {
      const deletedTask = await TaskModel.findOneAndDelete({ sno: sno });

      if (!deletedTask) {
          return res.status(404).json({ message: "Task not found" });
      }

      res.json({ message: "Task deleted successfully" });
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

module.exports = router