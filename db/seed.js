const Profile = require('../models/Profile');
const seedData = require('./seeds.json');

Profile.remove({})
	.then(() => Profile.collection.insert(seedData))
	.then(() => {
		process.exit();
	});
