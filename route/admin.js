const express = require('express');

const admin = express.Router();
admin.get('/', (req, res) => {
    res.render('./admin/loginAndSignup');
})
module.exports = admin;