const express = require("express");
const router = express.Router();

//Controller
const {
  allTasks,
  addTask,
  deleteTask,
  updateTask
} = require("../controller/task");

router.get("/", allTasks);
router.post("/", addTask);
router.delete("/:id", deleteTask);
router.put("/:id", updateTask);

module.exports = router;
