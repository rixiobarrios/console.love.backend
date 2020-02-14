const mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose
	.connect('mongodb://localhost/consolelove', {
		useNewUrlParser: true,
		useCreateIndex: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	})
	.then(instance =>
		console.log(`Connected to db: ${instance.connections[0].name}`)
	)
	.catch(error => console.log('Connection failed!', error)); // profiles may be replaced by a different value

module.exports = mongoose;
