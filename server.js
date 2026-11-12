const express = require("express");

const taskRoutes = require("./routes/taskRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/tasks", taskRoutes);

app.use((req, res, next) => {
  const tarih = new Date().toLocaleString("tr-TR");

 console.log(`[${tarih}] ${req.method} ${req.url}`)

  next();
});

app.get("/", (req, res) => {
  res.send("TaskFlow Backend çalışıyor!");
});

let tasks = require("./data/tasks");



app.post("/tasks", (req, res) => {
    const newTask = req.body;

    tasks.push(newTask);

    res.status(201).json(newTask);
});




app.listen(PORT, () => {
  console.log("Sunucu http://localhost:3000 adresinde çalışıyor.");
});