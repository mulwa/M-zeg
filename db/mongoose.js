var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/Mzeg';

mongoose.connect(url);

module.exports = {mongoose};