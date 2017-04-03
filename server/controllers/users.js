const mongoose = require('mongoose');
let User = mongoose.model('User');
module.exports = {
    index: function (req, res) {
        User.find({}, function (err, users) {
            if (err) {
                console.log(err);
            }
            else {
                res.json(users);
            }
        });
    },
    create: function (req, res) {
      User.create(req.body, function (err, user) {
          if (err) {
              res.json(err);
          }
          else {
              res.json(user);
          }
      });
    },
    delete: function (req, res) {
        User.remove({_id:req.params.id}, function (err) {
            if (err) {
                res.json(err);
            }
            else {
                res.json({message:'Deleted Friend'});
            }
        });
    }
};