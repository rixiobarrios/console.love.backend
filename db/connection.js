const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://localhost/profiles', { useMongoClient: true }); // profiles may be replaced by a different value

module.exports = mongoose;
