var mongoose = require('mongoose');

var User = mongoose.model('user', {
    email: {
        trim: true,
        required: true,
        minlength: 1,
        type: String
    },
});

module.exports = {User};