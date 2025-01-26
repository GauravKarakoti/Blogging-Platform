const { Schema , mongoose } = require('mongoose');
const articleSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    comments:[
        {
            type:Schema.Types.ObjectId,
            ref:"Comment"
        }
    ]
});
const Article=mongoose.model("Article",articleSchema);
module.exports=Article;