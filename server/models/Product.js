const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type :String,
        required: true,
    },
    quantity: Number,
    _orderProduct: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    created_at:{
        type: Date, default: Date.now,
    },
});
let Product = mongoose.model('Product', ProductSchema);