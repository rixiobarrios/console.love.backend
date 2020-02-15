const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Get all Profiles //
router.get('/', (req, res) => {
  Profile.find({}).then(profiles => {
    res.json(profiles);
  });
});

// Get profile by id
router.get('/:id', (req, res) => {
  let profile = Profile.find(profile => profile.id === parseInt(req.params.id));
  res.json(profile);
});

// POST new Profile //
router.post('/post', (req, res) => {
  const newProfile = req.body;
  Profile.create(newProfile).then(profile => res.json('/'));
});

// PUT edit Profile //
router.put('/:id', (req, res) => {
  Profile.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true
  }).then(profile => res.redirect('/'));
});

// DELETE Profile //
router.delete('/:id', (req, res) => {
  Profile.findOneAndDelete({ _id: req.params.id }).then(profile =>
    res.redirect('/')
  );
});
module.exports = router;
