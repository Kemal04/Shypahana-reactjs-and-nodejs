const express = require("express");
const { Users } = require("../models/models");
const bcrypt = require('bcrypt');
const { sign } = require("jsonwebtoken");

exports.post_register = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await Users.create({
            name: name,
            email: email,
            password: hashedPassword
        });
        res.json("Giriş kabul edildi");
    }
    catch (err) {
        console.log(err);
    }
};

exports.post_login = async (req, res) => {
    const { email, password } = req.body;

    const user = await Users.findOne({ where: { email: email } });

    if (!user) res.json({ error: "Beyle ulanyjy tapylmady" });

    bcrypt.compare(password, user.password).then(async (match) => {
        if (!match) res.json({ error: "E-mailinizi yada acar sozunizi yalnys yazdynyz" });

        const accessToken = sign(
            { email: user.email, id: user.id },
            "importantsecret"
        );
        res.json({ token: accessToken, email: email, id: user.id });
    });
};

exports.get_auth = async (req, res) => {
    res.json(req.user);
};


exports.get_info = async (req, res) => {
    const id = req.params.id;

    const basicInfo = await Users.findByPk(id, {
        attributes: { exclude: ["password"] },
    });

    res.json(basicInfo);
};
