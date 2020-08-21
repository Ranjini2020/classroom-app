const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models");




// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;


// Creating express app and configuring middleware needed for authentication
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:8080", // <-- location of the react app were connecting to
    credentials: true,
  })
);


app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());
require("./PassportConfig")(passport);

// set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/classroom1db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);


// set uo routes for course

require("./routes/studentView-route.js")(app);

// set up routes for login and sign up
app.post("/login", passport.authenticate('local'), function(req, res){
  res.json(req.user);
    //res.redirect("/courses");
    //If you want to redirect based off being a teacher or a student...
    //Let Kay know and he can come help you, because we'll need to adjust the PassportConfig.js
})

app.post("/register", (req, res) => {
  var tableName = "Student";
  if(req.body.isTeacher){
    tableName = "Teacher";
  }
  db[tableName].findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send(false)
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new db[tableName]({
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send(true);
    }
  });
});
app.get("/user", (req, res) => {
  if(req.user){
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  } else {
    res.send({email: "Not Found"});
  }
  
});
//----------------------------------------- END OF ROUTES------------------------------------------------
//----------------------------------------- END OF ROUTES---------------------------------------------------
//Start Server

 

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));



