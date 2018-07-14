const express = require('express');
const router = express.Router();
const UserPost = require('../models/user_post');

router.get('/user', (req, res, next) => {
    UserPost.find(function(err, data){
        res.json(data);
    })
});

router.post('/user', (req, res, next) => {
    let newPost = new UserPost({
        guid: req.body.guid,
        post: req.body.post,
        date: req.body.date
    });
    newPost.save((err, data)=> {
        if(err){
            res.json({msg:'Failed to add data'});
        }
        else {
            res.json({msg:'Data added successfully'});
        }
    });
});

module.exports = router;