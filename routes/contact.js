const express = require('express');
const router = express.Router();
const { showContactForm, sendContactForm } = require("../controllers/contact.js");

router.route('/')
    .get(showContactForm)
    .post(sendContactForm)

module.exports = router;