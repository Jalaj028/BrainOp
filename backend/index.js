const express = require("express");
const port = 3000;
const app = express();
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");


app.use(cors());

app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("Testing");
})

mongoose.connect("mongodb+srv://jalaj:jalaj@cluster0.v57qjoe.mongodb.net/", { dbName: "Internship" });

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
})