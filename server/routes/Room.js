const express = require('express')
const router = express.Router();

const RoomController = require("../controllers/RoomController");

router.get('/rooms', RoomController.get_rooms);

router.get('/rooms/create', RoomController.get_room_create);
router.post('/rooms/create', RoomController.post_room_create);
router.get('/rooms/edit/:id', RoomController.get_rooms_edit);
router.post('/rooms/edit/:id', RoomController.post_rooms_edit);
router.delete("/rooms/delete/:id", RoomController.rooms_delete);
router.get("/room/:id", RoomController.room_detail);

module.exports = router;