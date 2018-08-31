const express = require('express');
var router = express.Router();

var {userSchema}  = require('./../models/user');
var {accountSchema}  = require('./../models/account');
var {cashInSchema}  = require('./../models/cashInTransaction');
var {cashOutSchema}  = require('./../models/cashOutTransaction');
var {mongoose} = require('./../db/mongoose');

var User = mongoose.model('User',userSchema);
var Account = mongoose.model('Account',accountSchema);
var CashIn = mongoose.model('CashIn',cashInSchema);
var CashOut = mongoose.model('CashOut',cashOutSchema);
var isAuthenticated  = require('./../middleware/checkAuth');

// top up account
router.post('/top',isAuthenticated,(req,res,next)=>{    
    amount = req.body.amount;
    userData = req.userData;

    Account.findOne({email:userData.email},(error, user)=>{
        if(error){
            return res.status(500).json({
                status:false,
                message:error
            })
        }else{
            if(user == null){
                console.log('first debit');
                account = new Account({
                    user_id: userData.id,
                    email: userData.email,
                    amount:amount,            
                });
                account.save().then((doc) =>{
                    res.status(200).json({
                        status: true,
                        message:'Successfully Updated Your Account Balance ',
                        account:doc,                        
                    })
                })

            }else{               
                var updatedAmount = parseInt(amount) + parseInt(user.amount);
                Account.findOneAndUpdate({email:userData.email},{amount:updatedAmount},{new: true},(error, updatedAccount)=>{
                    if(error){
                        return res.status(500).json({
                            status:false,
                            message:error,
                            message:'Balance update error',
                        })
                    }else{
                        return res.status(200).json({
                            status:true,
                            message:'Updated Balance',
                            account: updatedAccount                 
                            
                        })
                    }

                })
            }
        }
    })
        
})
//check balance 
router.get('/balance',isAuthenticated,(req,res, next) =>{
    Account.find({email:req.userData.email},(error, account)=>{
        if(error){
            res.status(200).json({
                status: false,
                message: error
            })
        }else{
           return res.status(200).json({
                status: true,
                message: 'Successful',
                balance:  account[0].amount
                
            })
            
        }
    })
})
//send money
router.post('/sendmoney',isAuthenticated,(req,res,next)=>{  
    var receiverEmail = req.body.receiverEmail;
    var amount = req.body.amount;   
    var userdata = req.userData;
    //check if email exists
    User.findOne({email:receiverEmail},(error, receiverData)=>{
        if(error){
            return res.status(200).json({
                status: false,
                message: error
            })            
        }
        if(receiverData == null){
            return res.status(200).json({
                status: true,
                message: 'Receiver  with that Email does not exist'
            }) 
        }
            //check sender account has money
            Account.findOne({email:userdata.email},(error,senderAccount) =>{                
                if(parseInt(senderAccount.amount) < parseInt(req.body.amount)){
                    return res.status(200).json({
                        status: false,
                        message: 'You dont have sufficient funds in your account'
                    }) 
                }
                //update receiver account
                receiverBal = parseInt(senderAccount.amount) + parseInt(amount);
                console.log('value before update'+senderAccount.amount);
                console.log('value after update'+receiverBal);
                senderBal  =  parseInt(senderAccount.amount) - parseInt(amount);
                Account.findOneAndUpdate({email:receiverEmail},{amount:receiverBal},{new: true},(error,account) =>{
                    console.log(JSON.stringify(account));
                    if(error == null){
                        //save cash  out transaction
                        cashout = new CashOut({
                            email:senderAccount.email,
                            receiverName: receiverData.firstname,
                            receiverMobile:receiverData.mobile,
                            receiverEmail: receiverEmail,
                            amount: amount,
                            date: new Date()
                        }).save();
                       //update sender account
                       Account.findOneAndUpdate(
                           {email:senderAccount.email},
                           {amount:senderBal},{new: true},
                           (error,data)=>{
                            console.log(JSON.stringify(data));
                               if(error == null){
                                   User.findOne({email:senderAccount.email},(error, user)=>{         //save cash  out transaction
                                    cashin = new CashIn({
                                        email: receiverData.email,
                                        senderName: user.firstname,
                                        senderMobile:user.mobile,
                                        senderEmail: user.email,
                                        amount: amount,
                                        date: new Date()
                                    }).save();                       
                                    return res.status(200).json({
                                        status: true,
                                        message: 'Transactions completed successful',
                                        account: data,
                                                                         
                                    })
                                })
                               }else{
                                return res.status(200).json({
                                    status: false,
                                    message: 'Cannot complete Transaction please try again later',
                                                                  
                                })
                               }

                           })
                    }else{
                        return res.status(400).json({
                            status: false,
                            message: 'Cannot complete Transaction please try again later',
                           
                        })
                    }
                })
            })
            
            
        
    })
})
// money   send to other users
router.get('/moneysend',isAuthenticated,(req,res,next)=>{
    var userdata = req.userData;
    CashOut.find({email:userdata.email}, (error, account)=>{
        if(error){
            return res.status(200).json({
                status:false,
                message:error
            })
        }else{
            return res.status(200).json({
                status:true,
                message:'successful',
                cashout:account
            })
        }

    })
});

// money  received from other users
router.get('/moneyreceived',isAuthenticated,(req,res,next)=>{
    var userdata = req.userData;
    CashIn.find({email:userdata.email}, (error, account)=>{
        if(error){
            return res.status(200).json({
                status:false,
                message:error
            })
        }else{
            return res.status(200).json({
                status:true,
                message:'successful',
                cashin:account
            })
        }

    })
})

module.exports = router;