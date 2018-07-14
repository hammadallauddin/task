const mongoose = require('mongoose');

const UserPost = mongoose.Schema({
    guid:{
        type: String,
        required: true
    },
    post:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
});

const Data = module.exports = mongoose.model('UserPost', UserPost);