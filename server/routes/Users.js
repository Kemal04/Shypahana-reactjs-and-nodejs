const express = require("express");
const router = express.Router();
const {Users} = require('../models');

const bcrypt = require("bcrypt");
const {sign} = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    const {name, email, password} = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            name: name,
            email: email,
            password: hash,
        });
        res.json("SUCCESS");
    });
});

router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    const user = await Users.findOne({where: {email: email} });
    
    if (!user) res.json ({error: "beyle Ulanyjy yok"});

    bcrypt.compare(password, user.password).then((match) => {
        if(!match) res.json ({error: "ulanyjy ady bn parol yalnys"});

        const accessToken = sign(
            {email: user.email, id: user.id},
            "importantsecret"
            );
        res.json(accessToken); 
    });
});



module.exports = router;
