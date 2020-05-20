const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

// Connect to db
mongoose.connect("mongodb://localhost:27017/task-exercise", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Router Imports
const taskRouter = require("./routes/task");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use("/task", taskRouter);

module.exports = app;
