
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email:{
        type:String,
        required:true,
        minlength:3,
        unique:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    firstname:{
        type:String,
        required:true,       
        trim:true
    },
    surname:{
        type:String,
        required:true,       
        trim:true
    },       
    mobile:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,       
        trim:true
    },
});
// var user = mongoose.model('User',userSchema);
module.exports = {userSchema};