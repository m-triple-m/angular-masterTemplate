const mongoose = require('../connection');

const schema = mongoose.Schema({
    fullnmae: String,
    avatar: String,
    email: String,
    password: String,
    age: Number,
    created: Date,
})


const model = mongoose.model('Users', schema);

module.exports = model;