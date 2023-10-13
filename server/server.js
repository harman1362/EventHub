// load local variables
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}

// import dependencies
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const connectToDB = require('./config/dbConfig');
const usersController = require('./controllers/userController');
const requireAuth = require('./middleware/requireAuth');
const { fetchEvent, createEvent, fetchEventById, updateEvent } = require('./controllers/eventController');

 // app using express
const app = express();

// configure express
// by default express dont understand json so used this
app.use(express.json());
// to enable request from other origin i.e. otherthan this port
app.use(cors(
    {
        origin: true,
        credentials: true
    }
));
 // to get data out of request as an object
 app.use(bodyParser.urlencoded({extended:true})); 
// enable express to use cookie as default express cant read it 
app.use(cookieParser());

// connect to database
connectToDB();

// Routing 

app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);

app.get('/check-auth', requireAuth,usersController.checkAuth);

// get all events
app.get('/events',requireAuth, fetchEvent );
// create a new event
app.post('/events' ,requireAuth,createEvent);
// get the specific event
app.get('/events/:id' ,requireAuth, fetchEventById );
// update event
app.put('/events/:id', requireAuth,updateEvent);

app.listen(process.env.PORT, ()=> {
    console.log("App is running at port 2300!!")
});