const express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var jwt  = require('jsonwebtoken');
var isAuthenticated  = require('./../middleware/checkAuth');

var {userSchema}  = require('./../models/user');
var {accountSchema}  = require('./../models/account');
var {mongoose} = require('./../db/mongoose');

var User = mongoose.model('User',userSchema);
var Account = mongoose.model('Account',accountSchema);
//user registation end point
router.post('/',(req,res,next)=>{
    User.findOne({email:req.body.email}, (error, data)=>{
        if(error){
            return res.status(500).json({
                status: false,
                message: error
            })
        }else{
        if(data != null){
            return res.status(409).json({
                status:false,
                message: 'Email already  exists',                     
            })
        }else{
            User.findOne({mobile:req.body.mobile}, (error, data)=>{
                if(data !=null){
                    return res.status(409).json({
                        status:false,
                        message:'Mobile Number already Exists'
                    })
                }else{
                    bcrypt.hash(req.body.password,10,(error, hash)=>{
                        if(error){
                            return res.status(500).json({
                                status:false,
                                message:error
                            })
                        }else{
                            user = new User({
                                firstname: req.body.firstname,        
                                surname: req.body.surname,
                                email: req.body.email,
                                mobile: req.body.mobile,
                                password: hash
                            });
                            user.save().then((doc)=>{
                                //create account after success registration
                                account = new Account({
                                    user_id: doc.id,
                                    email: doc.email,
                                    amount:0,            
                                });
                                account.save()
                                res.status(200).json({
                                    status:true,
                                    message:"Registered successfully",
                                    data: doc,            
                        
                                })
                            },(e)=>{
                                console.log('error occured'+e);
                                res.status(400).send(e);
                            });   
                            
                
                        }
                    })

                }

            })            

        }
    }
    })
   
        

   

});
// login
router.post('/login',(req,res,next)=>{
    email = req.body.email;
    password = req.body.password;

    User.find({email:email},(err, data) =>{
        if(err){
            return res.status(401).json({
                status: false,
                message: err
            })
        }
        if(data.length < 1){
            return res.status(401).json({
                status:false,
                message: 'Authentication Failed',
                             
            })
        }else{
            bcrypt.compare(password,data[0].password, (error, result)=>{
                if(error){
                    return res.status(401).json({
                        status:false,
                        message: error
                    })
                }else{
                    if(result){
                        var token = jwt.sign({
                            email:data[0].email,
                            password:data[0].password,
                            _id:data[0]._id
                        },
                        "mulwatech",{
                            expiresIn:"7d"
                        });
                        return res.status(200).json({
                            status: true,
                            message: 'Authentication successful',
                            token: token
                        })
                    }
                }
            })
        }
        

    })
})

//get all users
router.get('/',(req,res,next)=>{
    User.find((error,data) =>{
        if(error){
           return res.status(400).json({
                status: false,
                message: error
            })
        }
        if(data.length ==0){
           return res.status(200).json({
                status: false,
                message: 'No users found'
            })
        }
        res.status(200).json({
            status: true,
            message:'Users found',
            users: data
        })
    })
});
//return  user using email
router.get('/:email',(req,res,next)=>{
    let searchEmail = req.params.email;
    User.findOne({ email:searchEmail},(error, data)=>{
        if(error){
            res.status(400).json({
                status : fail,
                message : error
            })
        }else {
            if(data == null){
                return res.status(200).json({
                    status : true,
                    message : 'User Not found'
                })
            }
            res.status(200).json({
                status:true,
                user: data
            })            
        }
    })
   
})

router.delete('/',(req,res,next)=>{
    res.status(200).json({
        message:"hello from user delete"
    });
});

module.exports = router;