const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const mongoose =require("mongoose")
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes

//MiddleWares

  mongoose.connect(process.env.DB_Connection,{useNewUrlParser: true ,useUnifiedTopology: true }, (err)=>{
    if(!err){
        console.log("connected to database");
    }
    else{
        console.log("err.message");
    }

});
  

app.listen(port,()=>{
   console.log(`Server is listening on port ${port}`)
});
