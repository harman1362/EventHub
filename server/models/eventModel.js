const mongoose = require('mongoose')

const uri = "mongodb+srv://iamastudent:iamastudent@cluster0.fbwovin.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{console.log("************* Connected to Mongodb Successfully ***********")})
.catch((error)=>{console.log(`Not Connected to Mongodb due to this error below \n ${error}`)})

const eventSchema = mongoose.Schema({
    eventName : String,
    location : String,
    date : Date,
    eventStatus : String,
    eventDescription : String,
    isPaid : Boolean,
    category : String,
    attendeeCount : Number,
    isLimited : Boolean
});


const eventModel = mongoose.model('event', eventSchema); 

module.exports = eventModel;