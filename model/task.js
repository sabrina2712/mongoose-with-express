const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  date: { type: Date, default: Date.now },
  done: { type: Boolean, default: false },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
