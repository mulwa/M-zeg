
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cashInSchema = new Schema({
    email:{
        type:String        
    },
    senderName:{
        type:String
    },
    senderMobile:{
        type:String,
        required:true,
        trim:true
    },   
    senderEmail:{
        type:String        
    },
    date:{
        type:Date
    },
    amount: {
        type:Number,
        minlength:2
        
    }
   
});
module.exports = {cashInSchema};