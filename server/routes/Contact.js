const express = require('express')
const router = express.Router();

const ContactController = require("../controllers/ContactController");

router.get("/contacts", ContactController.get_contacts);
router.post("/contact/create", ContactController.post_contact_create);

module.exports = router;