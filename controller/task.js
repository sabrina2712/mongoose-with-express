const Task = require("../model/task");

exports.allTasks = async (req, res) => {
  const tasks = await Task.find();

  res.json({ data: tasks });
};

exports.addTask = async (req, res) => {
  const task = new Task(req.body);

  const savedTask = await task.save();

  res.json({ data: savedTask });
};

exports.deleteTask = async (req, res) => {
  const _id = req.params.id;

  const deletedTask = await Task.deleteOne({ _id });

  res.json({
    data: {
      success: true,
      raw: deletedTask,
    },
  });
};

exports.updateTask = async (req, res) => {
  const _id = req.params.id;
  const updateInfo = req.body;

  const update = await Task.where({ _id }).update(updateInfo);
  console.log(update);
  res.json({ data: update });
};
