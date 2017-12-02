const mongoose = require('mongoose');

// use build in promises
mongoose.Promise = global.Promise;
//connect using mongoose
mongoose.connect(process.env.MONGO_URI ||  'mongodb://localhost:27017/TodoApp');

module.exports =  {mongoose};
