require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const helmet = require("helmet");
const Todo = require("./models/Todo");

const app = express();

/* ===============================
   SECURITY
================================ */
app.use(helmet());

/* ===============================
   DATABASE
================================ */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => {
    console.error("❌ MongoDB Error");
    console.error(err);
  });

/* ===============================
   MIDDLEWARE
================================ */
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

/* ===============================
   ROUTES
================================ */
app.get("/", async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.render("index", { todos });
});

app.post("/add", async (req, res) => {
  if (!req.body.text || req.body.text.length > 200) {
    return res.redirect("/");
  }

  await Todo.create({ text: req.body.text });
  res.redirect("/");
});

app.post("/toggle/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (todo) {
    todo.completed = !todo.completed;
    await todo.save();
  }
  res.redirect("/");
});

app.post("/delete/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect("/");
});

/* ===============================
   SERVER
================================ */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Todo app running on port ${PORT}`);
});
