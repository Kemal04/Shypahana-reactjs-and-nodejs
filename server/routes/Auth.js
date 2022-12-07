const express = require('express')
const router = express.Router();

const AuthController = require("../controllers/AuthController");
const { validateToken } = require('../middlewares/AuthMiddlewares');

router.get("/basicinfo/:id", AuthController.get_info);
router.get("/auth", validateToken, AuthController.get_auth);
router.post("/login", AuthController.post_login);
router.post("/register", AuthController.post_register);

module.exports = router;