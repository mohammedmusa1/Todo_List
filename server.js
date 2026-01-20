require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Todo = require("./models/todo");

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

// CONNECT DB FIRST
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Atlas Connected");

    // routes (ONLY after DB is connected)
    app.get("/", async (req, res) => {
      const todos = await Todo.find().sort({ createdAt: -1 });
      res.render("index", { todos });
    });

    app.post("/add", async (req, res) => {
      await Todo.create({ title: req.body.title });
      res.redirect("/");
    });

    app.post("/toggle/:id", async (req, res) => {
      const todo = await Todo.findById(req.params.id);
      todo.completed = !todo.completed;
      await todo.save();
      res.redirect("/");
    });

    app.post("/delete/:id", async (req, res) => {
      await Todo.findByIdAndDelete(req.params.id);
      res.redirect("/");
    });

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ MongoDB Connection Failed:", err);
  }
}

startServer();
