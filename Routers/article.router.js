const express = require('express');
const Article = require('../Models/article.schema');
const articleRouter = express.Router();
articleRouter.post('/createArticle', function(req, res) {
    try {
        Article.create(req.body).then((response) => {
            res.json({
                Message:"Article is created successfully!!",
                data:response
            });
        }).catch((err) => {
            res.json({Message:"Something went wrong!!",error:err})
        });
    } catch (error) {
        res.json({Message:"Something went wrong!!"})
    }
});
module.exports=articleRouter;