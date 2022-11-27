const express = require("express");
const router = express.Router();

const {getUser, registerUser, authenticateUser, logOutUser} = require("../../controllers/user-controller");

router.get("/getCurrent", getUser);
router.post("/register", registerUser);
router.post("/login", authenticateUser);
router.delete("/logout", logOutUser);

module.exports = router;