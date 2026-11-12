const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
  const tarih = new Date().toLocaleString("tr-TR");

 console.log(`[${tarih}] ${req.method} ${req.url}`)

  next();
});

app.get("/", (req, res) => {
  res.send("TaskFlow Backend çalışıyor!");
});

let tasks = [
  { id: 1, title: "SQL ödevini tamamla", completed: true },
  { id: 2, title: "Backend çalış", completed: false }
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
    const newTask = req.body;

    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.put("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Görev bulunamadı" });
  }

  task.title = req.body.title;
  task.completed = req.body.completed;

  res.json(task);
});

app.get("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Görev bulunamadı" });
  }

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const taskId = Number(req.params.id);
  const taskIndex = tasks.findIndex(t => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Görev bulunamadı" });
  }

  const deletedTask = tasks.splice(taskIndex, 1);

  res.json({
    message: "Görev başarıyla silindi",
    task: deletedTask[0]
  });
});

app.listen(PORT, () => {
  console.log("Sunucu http://localhost:3000 adresinde çalışıyor.");
});