const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

// Connect to db
mongoose.connect("mongodb://localhost:27017/task-exercise", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Router Imports
const taskRouter = require("./routes/task");
const usersRouter = require("./routes/users")

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use("/task", taskRouter);
app.use("/users", usersRouter);

module.exports = app;
