const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let UserSchema = new mongoose.Schema({
    name: {
        type: [String, 'Name must be a string'],
        unique: [true, 'Name should be unique'],
        uniqueCaseInsensitive: true,
        required: [true, 'You must enter a name'],
    },
    _orderUser: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    created_at:{
        type: Date, default: Date.now,
    },

});
let User = mongoose.model('User', UserSchema);