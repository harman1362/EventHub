const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://iamastudent:iamastudent@cluster0.fbwovin.mongodb.net/capstone_events_db?retryWrites=true&w=majority', 
// {useNewUrlParser: true, useUnifiedTopology: true}, (error)=> {
//     if(error) {
//         console.log('========== Mongodb not connected due to the error below ============');
//         console.log(error);
//     } else {
//         console.log("*************** Mongodb connected successfully **************");
//     }
// });

mongoose.connect('mongodb+srv://iamastudent:iamastudent@cluster0.fbwovin.mongodb.net/capstone_events_db?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(
    (error)=> {
        if(error) {
            console.log('========== Mongodb not connected due to the error below ============');
            console.log(error);
        } else {
            console.log("*************** Mongodb connected successfully **************");
        }
    }
);

const eventSchema = mongoose.Schema({
    ename : String
});

const eventModel = mongoose.model('event', eventSchema); // in mongo db the db name will be taken as books

module.exports = eventModel;