const mongoose = require('mongoose')

const uri = "mongodb+srv://iamastudent:iamastudent@cluster0.fbwovin.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{console.log("************* Connected to Mongodb Successfully ***********")})
.catch((error)=>{console.log(`Not Connected to Mongodb due to this error below \n ${error}`)})

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    email : {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password : String
});


const userModel = mongoose.model('user', userSchema); 

module.exports = userModel;
