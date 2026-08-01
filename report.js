const mongoose=require("mongoose");


const reportSchema=new mongoose.Schema({

description:{
type:String,
required:true
},


location:{
type:String,
required:true
},


category:{
type:String,
default:"Pending AI Detection"
},


priority:{
type:String,
default:"Normal"
},


fakeProbability:{
type:Number,
default:0
},


image:{
type:String
},


createdAt:{
type:Date,
default:Date.now
}


});


module.exports =
mongoose.model("Report",reportSchema);