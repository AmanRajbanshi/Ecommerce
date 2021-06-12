const express = require('express')
const app = express();
const port = process.env.PORT || 4000;
const mongoose =require("mongoose")
require('dotenv').config();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
const routesCategoriesLaptop = require('./routes/routesCategories/routesCategoriesLaptop');
const routesCategoriesPhone = require('./routes/routesCategories/routesCategoriesPhone');
const routesCategoriesTVS = require('./routes/routesCategories/routesCategoriesTVS');
const routesCategoriesKids = require('./routes/routesCategories/routesCategoriesKids');
const routesCategoriesSports = require('./routes/routesCategories/routesCategoriesSports');
const routesCategoriesClothes = require('./routes/routesCategories/routesCategoriesClothes');
const routesCategoriesFoods = require('./routes/routesCategories/routesCategoriesFoods');
const routesCategoriesHB = require('./routes/routesCategories/routesCategoriesHB');
const routesCategoriesMF = require('./routes/routesCategories/routesCategoriesMF');
const routesCategoriesFF = require('./routes/routesCategories/routesCategoriesFF');
const routesCategoriesElectronic = require('./routes/routesCategories/routesCategoriesElectronic');
const routesCategoriesContact = require('./routes/routesCategories/routesCategoriesContact');


//MiddleWares
app.use('/api',routesCategoriesLaptop);
app.use('/api',routesCategoriesPhone);
app.use('/api',routesCategoriesTVS);
app.use('/api',routesCategoriesKids);
app.use('/api',routesCategoriesSports);
app.use('/api',routesCategoriesClothes);
app.use('/api',routesCategoriesFoods);
app.use('/api',routesCategoriesHB);
app.use('/api',routesCategoriesMF);
app.use('/api',routesCategoriesFF);
app.use('/api',routesCategoriesElectronic);
app.use('/api',routesCategoriesContact);


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
