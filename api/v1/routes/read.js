const express = require('express');

const XLSController = require('../controllers/xls-controller');

const router = express.Router();
router.get("/", (req, res) => res.send("API Working!"));
router.post('/read', XLSController.readFile);

module.exports = router;