const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    author: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255
    },
    year: {
        type: Number,
        required: true,
        min: 0,
        max: new Date().getFullYear()
    },
    genre: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 100
    }
});

module.exports = mongoose.model('Book', bookSchema);