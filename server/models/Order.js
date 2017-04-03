const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
let OrderSchema = new mongoose.Schema({
    customers: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    order_quantity: Number,
    created_at:{
        type: Date, default: Date.now,
    },
});
let Order = mongoose.model('Order', OrderSchema);