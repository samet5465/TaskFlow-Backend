const express = require("express");
const router = express.Router();

const tasks = require("../data/tasks");

router.get("/", (req, res) => {
  res.json(tasks);
});

router.post("/", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.status(201).json(newTask);
});

router.put("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Görev bulunamadı"
    });
  }

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.json(task);
});

router.delete("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({
      message: "Görev bulunamadı"
    });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.json({
    message: "Görev başarıyla silindi",
    task: deletedTask[0]
  });
});

router.get("/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({
      message: "Görev bulunamadı"
    });
  }

  res.json(task);
});

module.exports = router;