var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const url = 'mongodb://localhost:27017/Mzeg';
const mlabUrl = 'mongodb://admin:sandamiano443s@ds241012.mlab.com:41012/m-zeg'

mongoose.connect(mlabUrl);

module.exports = {mongoose};