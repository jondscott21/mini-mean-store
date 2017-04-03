// require mongoose
let mongoose = require('mongoose');
let uniqueValidator = require('mongoose-unique-validator');
mongoose.plugin(uniqueValidator);
// require the fs module for loading model files
let fs = require('fs');
// require path for getting the models path
let path = require('path');
// connect to mongoose!
mongoose.connect('mongodb://localhost/mini-mean-store');// create a variable that points to the path where all of the models live
let models_path = path.join(__dirname, './../models');
// read all of the files in the models_path and require (run) each of the javascript files
fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
        // require the file (this runs the model file which registers the schema)
        require(models_path + '/' + file);
    }
});