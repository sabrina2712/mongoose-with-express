var express = require("express");
var logger = require("morgan");

var app = express();

// Router Imports

const taskRouter = require("./routes/task");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Router
app.use("/task", taskRouter);

module.exports = app;
