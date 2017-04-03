const mongoose = require('mongoose');
let Order = mongoose.model('Order');
let User = mongoose.model('User');
let Product = mongoose.model('Product');
module.exports = {
    index: function (req, res) {
        Order.find({}).populate('customers').populate('products').exec(function (err, orders) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(orders);
            }
        });
    },
    create: function (req, res) {
        console.log(req.body.orderUser);
        User.findOne({_id: req.body.orderUser._id}, function (err, user) {
            Product.findOne({_id: req.body.orderProduct._id}, function (err, product) {
                let order = new Order({order_quantity: req.body.quantity});
                user._orderUser = order._id;
                product._orderProduct = order._id;
                product.quantity -= req.body.quantity;
                order.customers.push(user);
                order.products.push(product);
                order.save(function (err) {
                    user.save(function (err) {
                        product.save(function (err) {
                            res.json(order);
                        })
                    })
                })
            })
        })
    }
};
