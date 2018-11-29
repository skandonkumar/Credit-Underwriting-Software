const express = require('express');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
// const cors = require("cors");
const keys = require('./config/keys');
const app = express();
require('./models/User');
require('./services/passport');

const URL = keys.mongoURI;
mongoose.connect(URL, { useNewUrlParser: true });

app.use(bodyParser.json());

// app.use(
//     cors({
//         origin : "http://localhost:3000",
//         methods:["GET","HEAD","POST","DELETE","PUT","PATCH","OPTIONS"],
//         credentials:true
//     })
// );

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production'){
    //Express will serve up production assets like our main.js or main.css file
    app.use(express.static('client/build'));
    //Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

app.get("/",(req,res)=>{
    res.send({hi:"there"})
})