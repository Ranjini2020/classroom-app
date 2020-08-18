const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const Teacher = require("../models/teacherModel.js");
const Student = require("../models/studentModel.js");
// const config = require('config');
router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName,isTeacher } = req.body;

    // validate

    if (!email || !password || !passwordCheck )
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

      var existingUser;
        if(isTeacher){
        existingUser = await Teacher.findOne({email: email});
        } else {
        existingUser = await Student.findOne({email: email});
        }
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });

    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password,check} = req.body;
    console.log(check+"from node")

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

      var user;
      if(check=="true"){
        console.log("inside teacher")
      user = await Teacher.findOne({email: email});
      } else {
        console.log("inside student")
      user = await Student.findOne({email: email});
      }
      console.log(user+"user from node")
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) 
    {
    return res.status(400).json({ msg: "Invalid credentials." });
    }
    else
    {
  console.log("inside else")
    
     const payload={ user: {
        id: user._id,
        displayName: user.displayName,
      }};
      res.send(user.displayName);
     console.log(payload)
     //crrate and generate token
  //   jwt.sign(
  //     payload,
  //     config.get('jwtsecret'), {
  //         expiresIn: 36000
  //     },
  //     (err, token) => {
  //         if (err) 
  //         return err.message;
  //         else{
  //           return token
  //         res.json({
  //             token
  //         });
  //       }
  //     }
     
  // );

    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await Student.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await Student.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const user = await Student.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

module.exports = router;