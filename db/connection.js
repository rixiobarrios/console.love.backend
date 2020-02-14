const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/profiles', { useMongoClient: true }); // profiles may be replaced by a different value

mongoose.Promise = Promise;

module.exports = mongoose;
