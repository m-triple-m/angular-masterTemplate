const Model = require('../models/userModel');
const router = require('express').Router();

router.get('/getuser', (req, res) => {
    res.send('user request at user router');
})

module.exports = router;