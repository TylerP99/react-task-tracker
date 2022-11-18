const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

require("./config/connectMongo")();

const passport = require("passport");
require("./config/passportConfig")(passport);

app.use("/", require("./routes/index"));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}) 