const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const reportRoutes = require("./routes/reportRoutes");


const app = express();


// Database
connectDB();


// Middleware
app.use(cors());
app.use(express.json());


// Image uploads
app.use("/uploads",express.static("uploads"));


// Routes
app.use("/api/reports",reportRoutes);



app.get("/",(req,res)=>{
    res.send("SafeCity AI Backend Running");
});



const PORT = 5000;


app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});