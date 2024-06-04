const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const { User, Posts } = require("../db");
const {authenticateJwt, SECRET} = require("../middleware/auth");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


express().use(bodyParser.json());


router.get('/', (req, res) => {
    res.send("hello from user route");
})


router.get("/me", authenticateJwt, async (req, res) => {
  const user = await User.findOne({ email: req.user.email });
  if (!user) {
    res.status(403).json({msg: "User doesnt exist"})
    return
  }
  res.json({
      email: user.email
  })
});

router.post('/signup', (req, res) => {
  const { email, password } = req.body;
  try{
    function callback(user) {
      if (user) {
        res.status(403).json({ message: 'User already exists' });
      } else {
        const obj = { email: email, password: password };
        const newUser = new User(obj);
        newUser.save();
  
        const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
        res.json({ message: 'User created successfully', token });
      }
  
    }
    User.findOne({ email }).then(callback);
  } catch(error){
    console.error(error)
    res.status(500).json({ message: 'Internal server error' });
  }
  
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try{
    const user = await User.findOne({ email, password });
    if (user) {
      const token = jwt.sign({ email, role: 'user' }, SECRET, { expiresIn: '1h' });
      res.json({ message: 'Logged in successfully', token });
    } else {
      res.status(403).json({ message: 'Invalid email or password' });
    }
  } catch(error){
    console.error(error)
    res.status(500).json({ message: 'Internal server error' });
  }
  
});

router.get('/posts', authenticateJwt, async (req, res) => {
  console.log("posts api hit")
  try{
    const posts = await Posts.find({});
    res.json({ posts });
  } catch(error){
    console.error(error)
    res.status(500).json({ message: 'Internal server error' });
  }

});

router.get('/post/:postId', authenticateJwt, async (req, res) => {
  console.log("post api hit")
  const postId = req.params.postId;
  try{
    const post = await Posts.findById(postId);
    res.json({ post });
  }catch(error){
    console.error(error)
    res.status(500).json({ message: 'Internal server error' });
  }
  
});

router.post('/posts', authenticateJwt, async (req, res) => {
  console.log("add post api hit")
  const post = new Posts(req.body);
  try{
    await post.save();
  res.json({ message: 'post created successfully', postId: post.id });
  }catch(error){
    console.error(error)
    res.status(500).json({ message: 'Internal server error' });
  }
  
});

module.exports = router;