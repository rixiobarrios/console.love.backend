const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: String,
  image: String,
  age: String,
  location: String,
  about: String,
  languages: []
});

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;
