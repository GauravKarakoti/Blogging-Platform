const express = require('express');
const Comment = require('../Models/comment.schema');
const commentRouter = express.Router();
commentRouter.post('/createComment', function(req, res) {
    try {
        Comment.create(req.body).then((response) => {
            res.json({
                Message:"Comment is created successfully!!",
                data:response
            });
        }).catch((err) => {
            res.json({Message:"Something went wrong!!",error:err})
        });
    } catch (error) {
        res.json({Message:"Something went wrong!!"})
    }
});
module.exports=commentRouter;