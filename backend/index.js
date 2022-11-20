const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

require("./config/connectMongo")();

const passport = require("passport");

const session = require("express-session");
const MongoStore = require("connect-mongo");
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.MONGO_URI}),
}));

require("./config/passportConfig")(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes/index"));

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
}) 