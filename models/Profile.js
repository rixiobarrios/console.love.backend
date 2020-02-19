const mongoose = require('../db/connections');

const ProfileSchema = new mongoose.Schema({
  image: String,
  name: String,
  age: Number,
  location: String,
  bio: String,
  languages: String,
  github: String
});

const Profile = mongoose.model('Profile', ProfileSchema);
module.exports = Profile;
