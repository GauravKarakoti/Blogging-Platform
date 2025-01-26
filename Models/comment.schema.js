const { Schema , mongoose } = require('mongoose');
const commentSchema=new Schema({
    comment:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    blog:{
        type:Schema.Types.ObjectId,
        ref:"Article",
        required:true
    }
});
const Comment=mongoose.model("Comment",commentSchema);
module.exports=Comment;