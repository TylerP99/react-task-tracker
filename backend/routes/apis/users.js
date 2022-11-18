const express = require("express");
const router = express.Router();

const {registerUser, authenticateUser, logOutUser} = require("../../controllers/user-controller");

router.post("/register", registerUser);
router.post("/login", authenticateUser);
router.delete("/logout", logOutUser);

module.exports = router;