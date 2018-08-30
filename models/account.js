
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var accountSchema = new Schema({
    user_id:{
        type:String,        
    },
    email:{
        type:String,
        required:true,
        minlength:3,
        unique:true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    amount: {
        type:Number,
        minlength:2
        
    }
   
});
// var user = mongoose.model('User',userSchema);
module.exports = {accountSchema};