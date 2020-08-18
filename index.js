
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// set up express

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


const PORT = process.env.PORT || 5000;



// set up mongoose

mongoose.connect(
  process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost/classroomdb",
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

// set up routes
require("./routes/api-routes.js")(app); 

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));