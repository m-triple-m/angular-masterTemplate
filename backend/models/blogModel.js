const mongoose = require('../connection');

const schema = mongoose.Schema({
    title: String,
    author: { type: mongoose.Types.ObjectId, ref: 'Users' },
    created: Date,
    thumb: String,
    data: Object,
    likes: Number,
    comments: Array,
    tags: Array
})


const model = mongoose.model('Blogs', schema);

module.exports = model;