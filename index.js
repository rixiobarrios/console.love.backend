const express = require('express');
const profileController = require('./controllers/profiles');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/profiles', profileController);

// app.use(methodOverride());

app.listen(4000, () => {
  console.log('Meet your match on port 4000');
});
