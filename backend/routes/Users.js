const express = require("express");
const router = express.Router();

const {Users} = require("../models");
const bcrypt = require("bcrypt") 

router.post("/", async(req, res)=> {
        const {name,last_name,username, password } = req.body;
        bcrypt.hash(password, 10).then((hash) => {
                Users.create({
                        name: name,
                        last_name:last_name,
                        username : username,
                        password: hash, 
                });
                res.json("Success");
        });
        
});

module.exports = router; 