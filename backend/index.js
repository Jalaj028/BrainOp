const express = require("express");
const port = 3000;
const app = express();
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");


app.use(bodyParser.json());

app.use(cors(
    {
        origin:["http://127.0.0.1:5173","https://brain-op-jalaj.vercel.app"],
        methods:["GET", "POST"],
        credentials: true
    }
));

app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("Testing");
})

mongoose.connect("mongodb+srv://jalaj:jalaj@cluster0.v57qjoe.mongodb.net/", { dbName: "Internship" });

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
})