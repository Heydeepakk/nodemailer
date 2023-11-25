const express = require("express")
const mailController = require('../controller/mailController')
const router = express.Router();

router
    .route('/mail')
    .post(mailController.mail);


module.exports = router
