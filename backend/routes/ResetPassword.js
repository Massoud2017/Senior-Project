const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

//-- Use 'sign' from jsonwebtoken to generate token
const { sign, decode } = require("jsonwebtoken");
const { validateToken } = require("../middlewares/ResetMiddleware");

router.post("/verifyuser", async (req, res) => {
  const { username, name, last_name } = req.body;
  const user = await Users.findOne({ where: { 
    username: req.body.username, 
    name: req.body.name, 
    last_name: req.body.last_name
  } });

  if (!user) {
    return res.json({ error: "User Doesn't Exist." });
  } else {
    const resetToken = sign(
      { 
        username: user.username,
      },
      "energyRANDOMsecret"
    );
    res.json(resetToken);
  }
});

router.put("/reset", validateToken, async (req, res) => {
  const newPassword = req.body;
  const resetToken = req.header("resetToken");
  const payload = decode(resetToken);
  console.log(req.body);
  console.log(payload);
  const user = await Users.findOne({ where: { 
    username: payload.username,
    question_one: req.body.security_question_1, 
    question_two: req.body.security_question_2, 
  }});

  if (!user) {
    return res.json({ error: "Incorrect security answer(s)!" });
  } else {
  bcrypt.hash(newPassword.password, 10).then((hash) => {
    Users.update(
      { password: hash },
      { where: { username: payload.username } }
    );
    res.json("SUCCESS");
  })};
})

module.exports = router;