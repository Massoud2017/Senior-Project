const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

//-- Use 'sign' from jsonwebtoken to generate token
const { sign, decode } = require("jsonwebtoken");

const { validateToken } = require("../middlewares/AuthMiddleware");
//- For register
router.post("/", async (req, res) => {
  const { name, last_name, username, password, question_one, question_two } = req.body;
  const user = await Users.findOne({ where: { username: username } });
  if(user) {
     res.json({ error: "User already Exist." })} else {
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      name: name,
      last_name: last_name,
      username: username,
      password: hash,
      question_one: question_one,
      question_two: question_two,
    });

    res.json("Success");
  });
  }
});

//- For login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  //-- Check if the user existed in our database
  //--  . if: user not exist, send error feedback
  //--  . else: user exists, check password
  //--    . if: password not match, send error feedback
  //--    . else: password correct, create and return token
  const user = await Users.findOne({ where: { username: username } });

  if (!user) {
    res.json({ error: "User Doesn't Exist." });
  } else {
    bcrypt.compare(password, user.password).then((match) => {
      if (!match) {
        res.json({ error: "Invalid Password." });
      } else {
        //-- Create token: pass in the data that needs to be secured.
        const accessToken = sign(
          { username: user.username, id: user.id },
          "energyRANDOMsecret"
        );
        res.json(accessToken);
      }
    });
  }
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});
// profile router
router.get("/basicinfo", validateToken, async (req, res) => {
  // since we can't access to the header we need to define here
  const accessToken = req.header("accessToken");
  //we use payload to get data
  const payload = decode(accessToken);
  const id = payload.id;
  //finding user by Id and exclude password
  const basicInfo = await Users.findByPk(id, {
    attributes: { exclude: ["password"] },
  });
  //returning profile info as JSON
  res.json(basicInfo);
});


// for change password page
router.put("/changepassword", validateToken, async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  const accessToken = req.header("accessToken");
  const payload = decode(accessToken);
  console.log(payload);
  const user = await Users.findOne({ where: { username: payload.username } });
  // compare old password with new password if its wrong show error message to the user
  bcrypt.compare(oldPassword, user.password).then(async (match) => {
    if (!match) return res.json({ error: "Wrong Password Entered!" });
    // if old password is correct than update the new passwod
    bcrypt.hash(newPassword, 10).then((hash) => {
      Users.update(
        { password: hash },
        { where: { username: payload.username } }
      );
      res.json("SUCCESS");
    });
  });
});

module.exports = router;