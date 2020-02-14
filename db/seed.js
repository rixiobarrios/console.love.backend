const Profile = require('../models/Profile');
const seedData = require('./seeds.json');

Profile.remove({})
  .then(() => {
    return Profile.collection.insert(seedData);
  })
  .then(() => {
    process.exit();
  });
