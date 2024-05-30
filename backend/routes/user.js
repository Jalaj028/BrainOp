const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");

express().use(bodyParser.json());

router.get('/', (req, res) => {
    res.send("hello from user route");
})

module.exports = router;