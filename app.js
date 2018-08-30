const express = require('express');
var app = express();
const bodyParser = require('body-parser');
var userRouter = require('./routers/userRouter');
var accountRouter = require('./routers/accountRouter');

app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

app.use('/user',userRouter);
app.use('/account',accountRouter);













module.exports = app;