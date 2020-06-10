const express = require('express');
const cors= require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
var bodyParser = require('body-parser')

//Mongoose Connection
mongoose.connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false })
.then((db)=>{
    console.log("connected to Moongoose database");  

});

const app= express();
app.use(express.json());
app.use(cors());
app.options('*',cors());


app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
  }))
  app.use(bodyParser.json())

  //server startup
app.listen(process.env.PORT, () => {
    console.log('App is running at localhost:'+ process.env.PORT);
});
