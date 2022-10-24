const express = require("express");
const router = express.Router();
const {Users} = require('../models');

const bcrypt = require("bcrypt");


router.post("/", async (req, res) => {
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
    const {name, email, password} = req.body;

    const user = await Users.findOne({where: {name: name} });

    if (!user) res.json ({error: "beyle Ulanyjy yok"});

    bcrypt.compare(password, user.password).then((match) => {
        if(!match) res.json ({error: "ulanyjy ady bn parol yalnys"});
    
        res.json("Sizin giris etdiniz!!!");
    });
});



module.exports = router;

