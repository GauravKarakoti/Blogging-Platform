const { Schema , mongoose } = require('mongoose');
const userSchema=new Schema({
    firstName:{
        type:String,
        required:[true, "Kindly input the first name"]
    },
    lastName:{
        type:String,
        required:[true, "Kindly input the last name"]
    },
    email:{
        type:String,
        required:[true, "Kindly input the email"]
    },
    password:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    blog:[
        {
            type:Schema.Types.ObjectId,
            ref:"Article"
        }
    ],
    roles:{
        type:String,
        enum:["SUPER ADMIN","ADMIN","USER"],
        default:"USER"
    }
});
const User=mongoose.model("User",userSchema);
module.exports=User;