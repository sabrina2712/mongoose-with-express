const express = require("express");
const router = express.Router();

const {allUsers, addUser, deleteUser, updateUser} = require("../controller/users");

router.get("/", allUsers);
router.post("/", addUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

module.exports = router;