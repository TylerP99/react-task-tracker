const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

function initPassportLocal(passport) {
    passport.use(new LocalStrategy({usernameField: "email"},

        async function verifyCredentials(email, password, done) {
            try {
                const user = await User.findOne({email:email});

                if(!user) {
                    return done(null, false, {msg: "A user with that email was not found"});
                }

                const match = await bcrypt.compare(password, user.password);

                if(!match) {
                    return done(null, false, {msg: "That password is incorrect"});
                }

                return done(null, user);
            }
            catch(e) {
                console.error(e);
                return done(e);
            }
        }

    ));

    passport.serializeUser((user, done) => {
        done(null, user.id)
    });
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
    });
}

module.exports = initPassportLocal;