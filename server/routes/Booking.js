const express = require('express')
const router = express.Router();

const BookingController = require("../controllers/BookingController");

router.get("/bookings", BookingController.get_bookings);
// router.get("/bookings/room", BookingController.get_bookings_room);
router.post("/booking/create", BookingController.post_booking_create);

module.exports = router;