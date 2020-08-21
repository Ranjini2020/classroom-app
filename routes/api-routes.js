// var db = require("../models");
// var passport = require("../config/passport");

// module.exports = function(app) {
//     // Using the passport.authenticate middleware with our local strategy.
//     // If the user has valid login credentials, send them to the members page.
//     // Otherwise the user will be sent an error
//     app.post("/api/login", passport.authenticate("local"), function(req, res) {
//       res.json(req.user);
//     });
//     // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
//   // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
//   // otherwise send back an error
//   app.post("/api/signup",({body} ,res) =>{
//     db.Teacher.create(body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
     
    


    
// }



// Student, Teacher - Create, (getUser), update>>teacher add course, student enroll course
// Courses - Create, Update, View, "" Delete ""
    // CUD - Teacher
    // V - Teacher/Student
        // get("/api/course/:id")
        // .populate()