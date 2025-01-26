let mongoose=require("mongoose");
function dbConfig() {
    mongoose.connect(
        "mongodb+srv://admin:Karakoti8@cluster0.ak3sf.mongodb.net/blogging-platform"
    ).then(()=>{
        console.log("Connected to MongoDB")
    });
}
module.exports=dbConfig;