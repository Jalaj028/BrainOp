const mongoose = require("mongoose");

//Mongoose schemas

const userSchema = new mongoose.Schema({
    email: {type: String}, 
    password: {type: String}
})


const postSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String},
    Banner: {type: String},
})



const Posts = mongoose.model('Posts', postSchema);
const User = mongoose.model('User', userSchema);



module.exports = {Posts, User};