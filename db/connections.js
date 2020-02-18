const mongoose = require('mongoose');

let mongoURI = '';
if (process.env.NODE_ENV === 'production') {
  mongoURI = process.env.DB_URL;
} else {
  mmongoURI = 'mongodb://localhost/consoledotlove';
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(error => console.log('Connection failed!', error));

module.exports = mongoose;
