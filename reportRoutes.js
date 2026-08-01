const express=require("express");

const router=express.Router();

const Report=require("../models/Report");

const multer=require("multer");


// Image Storage

const storage=multer.diskStorage({

destination:"uploads/",

filename:(req,file,cb)=>{

cb(
null,
Date.now()+"-"+file.originalname
);

}

});


const upload=multer({storage});



// Submit Report

router.post(
"/submit",
upload.single("image"),

async(req,res)=>{


try{


const report=new Report({

description:req.body.description,

location:req.body.location,

image:req.file?
req.file.filename:null,


// AI placeholders

category:"AI Processing",

priority:"Checking",

fakeProbability:10


});


await report.save();



res.json({

message:"Report submitted successfully",

report

});


}

catch(error){

res.status(500)
.json({
error:error.message
});

}


});





// Get All Reports

router.get("/",async(req,res)=>{


const reports=
await Report.find();


res.json(reports);


});



module.exports=router;