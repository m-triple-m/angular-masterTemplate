const Model = require('../models/blogModel');
const router = require('express').Router();

router.get('/getall', (req, res) => {

    Model.find({})
        .populate('author')
        .then(data => {
            console.log('blogs data fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
        })
})

router.get('/getbyauthor/:authorid', (req, res) => {

    Model.find({ author: req.params.authorid })
        .then(data => {
            console.log('blogs data fetched by author');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
        })
})

router.get('/getbyid/:id', (req, res) => {

    Model.findById(req.params.id)
        .populate('author')
        .then(data => {
            console.log('blog details fetched');
            res.status(200).json(data);
        })
        .catch(err => {
            console.error(err);
        })
})

router.post('/add', (req, res) => {
    new Model(req.body).save()
        .then(data => {
            console.log('blog data saved');
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})

router.put('/updatelike/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body)
        .then(data => {
            console.log('blog likes updated');
            res.status(200).json({ message: 'success' });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json(err);
        })
})


module.exports = router;