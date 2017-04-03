const mongoose = require('mongoose');
let Product = mongoose.model('Product');
module.exports = {
    index: function (req, res) {
        Product.find({}, function (err, product) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(product);
            }
        });
    },
    create: function (req, res) {
        Product.create(req.body, function (err, product) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(product);
            }
        });
    },
};