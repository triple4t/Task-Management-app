import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

let tasks = [];
let taskId = 1;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to fetch tasks
app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

// Route to create a task
app.post("/api/tasks", (req, res) => {
  const { title, description, status } = req.body;
  if (!title || !status) {
    return res.status(400).json({ error: "Title and status are required" });
  }
  const newTask = { id: taskId++, title, description, status, created_at: new Date() };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Route to update a task
app.put("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = tasks.find((task) => task.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.title = title;
  task.description = description;
  task.status = status;
  task.updated_at = new Date();
  res.json(task);
});

// Route to delete a task
app.delete("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const taskIndex = tasks.findIndex((task) => task.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];
  res.json({ message: `Task with ID ${deletedTask.id} has been deleted.`, deletedTask });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
