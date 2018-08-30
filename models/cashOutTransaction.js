
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cashOutSchema = new Schema({
    email:{
        type:String        
    },
    receiverName:{
        type:String
    },
    receiverMobile:{
        type:String,
        required:true,
        trim:true
    },   
    receiverEmail:{
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
module.exports = {cashOutSchema};