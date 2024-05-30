const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Testing");
})

app.listen(port, () => {
    console.log(`App listening to port ${port}`);
})