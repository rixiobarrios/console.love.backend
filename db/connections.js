const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/consolelove', {
	useNewUrlParser: true,
	useCreateIndex: true,
	useUnifiedTopology: true,
	useFindAndModify: false
});

module.exports = mongoose;
