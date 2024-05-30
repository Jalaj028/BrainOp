const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const { User, Posts } = require("../db");
const {authenticateJwt, SECRET} = require("../middleware/auth");
const jwt = require("jsonwebtoken");

express().use(bodyParser.json());

router.get('/', (req, res) => {
    res.send("hello from user route");
})


//user login route

router.post("/login", async (req, res) => {
    console.log("login route hit");
    const {email, password} = req.body;
    const user = await User.find({});
    console.log(user)
    var auth;
    if(user[0].email == email && user[0].password == password){
      auth = true;
    }

    if (auth) {
      const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  });
  

  router.get('/me', authenticateJwt, (req, res) => {
    console.log("me api hit");
    res.status(200).json({
      email: req.user.email
    })
  })

module.exports = router;