const express = require("express")
const { Rooms } = require("../models/models")

exports.get_rooms = async (req, res) => {
    const rooms = await Rooms.findAll();
    res.json({
        rooms: rooms,
        action: req.query.action
    });
}

exports.get_room_create = async (req, res) => {
    try {
        const resorts = await Rooms.findAll();
        res.json({
            resorts: resorts,
            action: req.query.action
        });
    }
    catch (err) {
        console.log(err)
    }

}

exports.post_room_create = async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const capacity = req.body.capacity;
    const size = req.body.size
    const img = req.body.img
    const resortId = req.body.resortId;

    try {
        await Rooms.create({
            name: name,
            price: price,
            capacity: capacity,
            size: size,
            img: img,
            resortId: resortId,
        })
        res.json({ success: "Otag üstünlikli goşuldy" });
    }
    catch (err) {
        console.log(err);
    }

}

exports.get_rooms_edit = async (req, res) => {
    const id = req.params.id;
    try {
        const room = await Rooms.findByPk(id);
        if (room) {
            return res.json({
                room: room,
                action: req.query.action
            });
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.post_rooms_edit = async (req, res) => {

    const id = req.params.id;
    const name = req.body.name;
    const price = req.body.price;
    const capacity = req.body.capacity;
    const size = req.body.size
    const img = req.body.img
    const resortId = req.body.resortId;

    try {
        const room = await Rooms.findByPk(id);
        if (room) {
            room.name = name;
            room.price = price;
            room.capacity = capacity;
            room.size = size;
            room.img = img;
            room.resortId = resortId;
            room.save();
            return res.json({ success: "Otag üstünlikli uytgedildi" });
        }
    }
    catch (err) {
        console.log(err);
    }
}

exports.rooms_delete = async (req, res) => {
    const id = req.params.id;
    try {
        const rooms = await Rooms.findByPk(id);
        if (rooms) {
            await rooms.destroy();
            res.json({ success: "Otag üstünlikli pozuldy" });
        }

    }
    catch (err) {
        console.log(err);
    }
}

exports.room_detail = async (req, res) => {
    const id = req.params.id
    try {
        const room = await Rooms.findByPk(id);
        if (room) {
            return res.json({
                room: room
            })
        }
    }
    catch (err) {
        console.log(err)
    }
}