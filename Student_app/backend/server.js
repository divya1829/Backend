import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let students = [];

// Add student
app.post("/students", (req, res) => {
  const student = { id: Date.now(), ...req.body };
  students.push(student);
  res.json(student);
});

// Get all
app.get("/students", (req, res) => {
  res.json(students);
});

// Get one
app.get("/students/:id", (req, res) => {
  res.json(students.find(s => s.id == req.params.id));
});

// Update
app.put("/students/:id", (req, res) => {
  students = students.map(s =>
    s.id == req.params.id ? { ...s, ...req.body } : s
  );
  res.json({ message: "Updated" });
});

// Delete
app.delete("/students/:id", (req, res) => {
  students = students.filter(s => s.id != req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
