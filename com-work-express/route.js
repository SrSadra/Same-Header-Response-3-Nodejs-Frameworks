const express = require("express");
const router = express.Router();
const {validationResult} = require("express-validator")
const {validationInput , inputSchema} = require("./input.middleware"); 

router.post("" , inputSchema ,validationInput ,(req , res) => {
    const x  = req.body.x;
    const y = req.body.y;
    console.log(x * y);
    res.status(201).send({z : x * y});
})

module.exports = router; 