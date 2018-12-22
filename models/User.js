const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Query to create a new MongoDB schema with the following collections
const userSchema = new Schema({
    googleId:String
});

mongoose.model('users',userSchema);
