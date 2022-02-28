const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

//-- Use 'sign' from jsonwebtoken to generate token
const { sign } = require("jsonwebtoken");

//- For register
router.post("/", async (req, res) => {
	const { name, last_name, username, password } = req.body;
	bcrypt.hash(password, 10).then((hash) => {
		Users.create({
			name: name,
			last_name: last_name,
			username: username,
			password: hash,
		});

		res.json("Success");
	});
});

//- For login
router.post("/login", async (req, res) => {
	const { username, password } = req.body;

	const user = await Users.findOne({ where: { username: username } });

	if (!user) {
		res.json({ error: "User Doesn't Exist."});
	} else {
		bcrypt.compare(password, user.password).then((match) => {
			if (!match) {
				res.json({ error: "Invalid Username and Password." });
			} else {
				const accessToken = sign(
					{ username: user.username, id: user.id }, "energyRANDOMsecret"
				);
				res.json(accessToken);
			}
		});
	}
});

module.exports = router;