var express=require("express");
const dbConfig=require("./Configurations/db.config.js");
var app=express();
const bodyParser=require("body-parser");
const userRouter=require("./Routers/user.router");
const articleRouter=require("./Routers/article.router");
const commentRouter=require("./Routers/comment.router");
app.use(bodyParser.json());
app.use("/api/v1/user",userRouter);
app.use("/api/v1/article",articleRouter);
app.use("/api/v1/comment",commentRouter);
app.listen("5001",async()=>{
    console.log("Server is running on port 5001");
    await dbConfig();
});