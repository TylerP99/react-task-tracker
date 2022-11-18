const express = require("express");
const router = express.Router();

router.use("/users", require("./apis/users"));
router.use("/tasks", require("./apis/tasks"))

module.exports = router;