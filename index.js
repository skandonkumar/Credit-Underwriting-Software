//importing modules and assigning it to constants
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
//Importing keys from sub directories
const keys = require('./config/keys');
//Creating an express app
const app = express();
require('./models/User');
require('./services/passport');

//Import the remote MongoDB URL from keys.js directory and use mongoose to connect to remote MongoDB server
const URL = keys.mongoURI;
mongoose.connect(URL, { useNewUrlParser: true });

//Body Parser is used as a middleware for handling JSON data from requests and responses
app.use(bodyParser.json());

//Cookie Session is used to set the cookie in the browser when user logs in so that he need not be authorized
// for every successive request to the server
app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)

//Passport.JS is used to implement the google strategy
app.use(passport.initialize());
app.use(passport.session());

//The royes directory is imported from routes folder
require('./routes/authRoutes')(app);

//Required environment variables setup for deployment to heroku server. The details about this can be found in heroku documentations
if (process.env.NODE_ENV === 'production'){
    //Express will serve up production assets like our main.js or main.css file
    app.use(express.static('client/build'));
    //Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//Setting the PORT to listen for development and production version
const PORT = process.env.PORT || 5000;
app.listen(PORT);

//A testing route to check if the HTTP requests and responses are communicating on the express server.
//Just type localhost:5000 in the browser when the server is running and it Returns JSON of the form {hi:there}
app.get("/",(req,res)=>{
    res.send({hi:"there"})
})