const mongoose = require('mongoose')
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