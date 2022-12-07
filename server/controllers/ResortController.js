const express = require("express");
const { where } = require("sequelize");
const { Resorts, Rooms } = require("../models/models")

exports.get_resorts = async (req, res) => {
    const resorts = await Resorts.findAll();
    res.json({
        resorts: resorts,
        action: req.query.action
    });
}

exports.post_resorts_create = async (req, res) => {
    const name = req.body.name
    const email = req.body.email;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const img = req.body.img;

    try {
        await Resorts.create({
            name: name,
            email: email,
            address: address,
            phoneNumber: phoneNumber,
            img: img,
        });
        res.json({ success: "Şypahana üstünlikli goşuldy" });
    }
    catch (err) {
        console.log(err);
    }
}

exports.get_resorts_edit = async (req, res) => {
    const id = req.params.id;
    try {
        const resort = await Resorts.findByPk(id);
        if (resort) {
            return res.json({
                resort: resort,
                action: req.query.action
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.post_resorts_edit = async (req, res) => {

    const id = req.params.id;
    const name = req.body.name
    const email = req.body.email;
    const address = req.body.address;
    const phoneNumber = req.body.phoneNumber;
    const img = req.body.img;

    try {
        const resort = await Resorts.findByPk(id);
        if (resort) {
            resort.name = name;
            resort.email = email;
            resort.address = address;
            resort.phoneNumber = phoneNumber;
            resort.img = img;
            resort.save();
            return res.json({ success: "Şypahana üstünlikli uytgedildi" });
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.post_resorts_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const resorts = await Resorts.findByPk(id);
        if (resorts) {
            await resorts.destroy();
            res.json({ success: "Şypahana üstünlikli pozuldy" });
        }

    }
    catch (err) {
        console.log(err);
    }
}

exports.get_resorts_detail = async (req, res) => {
    const id = req.params.id;
    try {
        const resort = await Resorts.findByPk(id);
        const rooms = await Rooms.findAll({
            where: {
                resortId: id,
            }
        })
        res.json({
            resort: resort,
            rooms: rooms,
        })

    }
    catch (err) {
        console.log(err);
    }
}
