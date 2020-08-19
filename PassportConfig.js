const db = require("./models");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy(
        {
            usernameField: "email"
        },
        (email, password, done) => {
        db.Student.findOne({ email: email }, (err, user) => {
            if (err) throw err;
            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user);
                    }
                });
            }
            db.Teacher.findOne({ email: email }, (err, user) => {
                if (err) throw err;
                if (!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                });
            });
        })
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser(async (id, cb) => {
    var user = await db.Student.findOne({ _id: id });
    if(!user){
        user = await db.Teacher.findOne({_id:id});
    }
    cb(null ,user);
  });
};