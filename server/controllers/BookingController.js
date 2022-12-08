const express = require("express");
const { Rooms, RoomBooking, Users, RoomGuestBooking } = require("../models/models")

exports.get_bookings = async (req, res) => {

    const id = req.query.userId

    const booking = await RoomBooking.findAll({ include: Rooms, where:{userId:id} });
    res.json({
        booking: booking,
        action: req.query.action
    });
}

exports.post_booking_create = async (req, res) => {
    const checkIn = req.body.checkIn
    const checkOut = req.body.checkOut;
    const mark = req.body.mark;
    const phoneNumber = req.body.phoneNumber;
    const roomId = req.body.roomId;
    const userId = req.body.userId;

    try {
        await RoomBooking.create({
            checkIn: checkIn,
            checkOut: checkOut,
            mark: mark,
            phoneNumber: phoneNumber,
            roomId: roomId,
            userId: userId,
        });
        res.json({ success: "Şypahana üstünlikli goşuldy" });
    }
    catch (err) {
        console.log(err);
    }
}
