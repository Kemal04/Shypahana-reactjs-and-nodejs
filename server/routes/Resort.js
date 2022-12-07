const express = require('express')
const router = express.Router();

const ResortController = require("../controllers/ResortController");

router.get("/resorts", ResortController.get_resorts);
router.post("/resorts/create", ResortController.post_resorts_create);
router.get('/resorts/edit/:id', ResortController.get_resorts_edit);
router.post('/resorts/edit/:id', ResortController.post_resorts_edit);
router.delete("/resorts/delete/:id", ResortController.post_resorts_delete);
router.get("/resorts/:id", ResortController.get_resorts_detail);

module.exports = router;