const Model = require('../models/blogModel');
const router = require('express').Router();

router.get('/getall', (req, res) => {

    Model.find({})
        .then(data => {
            console.log('blogs data fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
        })
})

router.get('/add', (req, res) => {
    new Model(req.body).save()
        .then(data => {
            console.log('blogs data fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
        })
})

module.exports = router;