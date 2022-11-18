const express = require("express");
const router = express.Router();

const {getTasks, createTask, updateTask, deleteTask} = require("../../controllers/task-controller");

router.get("/", getTasks);
router.post("/", createTask);
router.put("/", updateTask);
router.delete("/", deleteTask);

module.exports = router;