const express = require('express');
const User = require('../Models/user.schema');
const userRouter = express.Router();
userRouter.post('/createUser', function(req, res) {
    try {
        User.create(req.body).then((response) => {
            res.json({Message:"User is created successfully!!",data:response});
        }).catch((err) => {
            res.json({Message:"Something went wrong!!",error:err})
        });
    } catch (error) {
        res.json({Message:"Something went wrong!!"})
    }
});
userRouter.get('/getUsers', function(req, res) {
    try {
        User.find().then((response) => {
            res.json({Message:"User is fetched successfully!!",data:response});
        }).catch((err) => {
            res.json({Message:"Something went wrong!!",error:err})
        });
    } catch (err) {
        res.json({Message:"Something went wrong!!",error:err})
    }
});
module.exports=userRouter;