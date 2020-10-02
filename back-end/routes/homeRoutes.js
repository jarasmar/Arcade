const express = require('express');
router = express.Router();
home = require("../controllers/homeController");


router.get('/', home.games);

module.exports = router
