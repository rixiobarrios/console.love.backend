const express = require('express');
const profilesController = require('./controllers/profiles');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/profiles', profilesController);

app.listen(4000, () => {
	console.log('Meet your match on port 4000');
});
