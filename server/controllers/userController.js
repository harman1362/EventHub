const bcrypt = require('bcryptjs'); 
// const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

async function signup(req, res){
    try {
        // get email and password from req body
        const {email, password} = req.body;
        // hash the password before storing in the database
        var hashedPassword = bcrypt.hashSync(password, 8);
        // create new user using data
        const response = await User.create({
            email, 
            password:hashedPassword,
        });
        // respond 
        res.sendStatus(200);
    } catch (error) {
        console.log("Error creating new user" , error);
        res.sendStatus(400);
    }

};

async function login(req, res){
    try {
        // get the email and password from body 
    const {email, password} = req.body;
   
    // first get the user with the given email
    const user  = await User.findOne({email});
    // when user not found 
    if(!user) 
        return res.sendStatus(401); 

    // check the validity of password
    const validPassword = bcrypt.compareSync(password, user.password);
    if(!validPassword) 
        return res.sendStatus(401); 


        // to be added later 

    // // create jwt token 
    // // expiration time is 30 days from current time
    // const exp = Date.now() + 1000 * 60 * 60 *24 *30;
    // const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

    // // set cookie with the token, check cookie npm option for more details 
    // res.cookie('Authorization' , token,  {
    //     expires: new Date(exp),
    //     httpOnly: true,
    //     sameSite: 'lax',
    //     secure:  process.env.NODE_ENV === 'production'
    // })
    // send the created jwt token


    res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
    
 
};
function logout(req, res){
    try {
        // res.clearCookie("Authorization");
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(400);
    }
   
}; 


function checkAuth(req, res){
    // user we are getting from middleware after decoding it from cookie
    // console.log(req.user);
    try {
        res.sendStatus(200);
    } catch (error) {
        res.sendStatus(400);
    }
    
} 
module.exports = {
    signup,
    login,
    logout,
    checkAuth, 
}