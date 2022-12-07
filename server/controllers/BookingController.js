const express = require("express");
const { Resorts, Rooms, Booking } = require("../models/models")

exports.get_bookings = async (req, res) => {
    var id = req.query.userId;

    const booking = await Booking.findAll({
        where: {
            userId: id,
            // roomId: id,
        }
    });

    const room = await Rooms.findAll();
    res.json({
        booking: booking,
        room: room,
        action: req.query.action
    });
}

// exports.get_bookings_room = async (req, res) => {
//     var id = req.params.roomId;

//     const booking = await Booking.findAll({
//         where: {
//             id: roomId
//         }`
//     });
//     res.json({
//         booking: booking,
//         action: req.query.action
//     });
// }

exports.post_booking_create = async (req, res) => {
    const checkIn = req.body.checkIn
    const checkOut = req.body.checkOut;
    const mark = req.body.mark;
    const phoneNumber = req.body.phoneNumber;
    const userId = req.body.userId;
    const roomId = req.body.roomId;

    try {
        await Booking.create({
            checkIn: checkIn,
            checkOut: checkOut,
            mark: mark,
            phoneNumber: phoneNumber,
            userId: userId,
            roomId: roomId,

        });
        res.json({ success: "Şypahana üstünlikli goşuldy" });
    }
    catch (err) {
        console.log(err);
    }
}
