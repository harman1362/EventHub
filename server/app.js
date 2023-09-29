const express = require('express');

const eventModel = require('./db.js');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:true}));  // to get data out of request as an object

app.set('view-engine', 'ejs');

app.listen(2300, ()=> {
    console.log("App is running at port 2300!!")
});