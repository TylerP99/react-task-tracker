const passport = require("passport");
const bcrypt = require("bcryptjs");
const User = require("../models/User");



const getUser = async (req, res) => {
    const user = (req.user) ? req.user : null;

    res.status(200).json({user: user});
}

const registerUser = async (req, res, next) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
    }

    const errors = [];

    if(!user.email) {
        errors.push({msg: "Email is required"});
    }
    if(user.password.length < 8) {
        errors.push({msg: "Password must be at least 8 characters"});
    }
    if(user.password !== req.body.password2) {
        errors.push({msg: "Passwords must match"});
    }

    const existing = await User.findOne({email: user.email});

    if(existing) {
        errors.push({msg: "A user with that email already exists"});
    }

    if(errors.length) return res.status(400).json({errors: errors});

    user.password = await bcrypt.hash(user.password, 10);

    const newUser = await User.create(user);

    req.logIn(newUser, (err) => {
        if(err) return next(err);
        res.status(201).json({user:newUser});
    });
};

const authenticateUser = async (req, res, next) => {
    const errors = [];

    if(!req.body.email) {
        errors.push({msg: "Email can not be empty"});
    }

    if(!req.body.password) {
        errors.push({msg: "Password can not be empty"});
    }

    if(errors.length) return res.status(400).json({errors: errors});

    passport.authenticate("local",
        (err, user, info) => {
            if(err) return next(err);

            if(!user) {
                return res.status(400).json({errors: [info]});
            }

            req.logIn(user, (err) => {
                if(err) return next(err);

                return res.status(200).json({user});
            });
        }
    )(req,res,next);
};

const logOutUser = async (req, res, next) => {
    req.logOut((err) => {
        if(err) return next(err);

        res.status(200).json({msg: "Success"});
    });
};


module.exports = {
    getUser,
    registerUser,
    authenticateUser,
    logOutUser,
}