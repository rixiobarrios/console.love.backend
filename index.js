const express = require('express');
const profilesController = require('./controllers/profiles');
const methodOverride = require('method-override');
const cors = require('cors');

const app = express();
app.set('port', process.env.PORT || 4000);

app.use(express.json());

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use('/profiles', profilesController);

app.listen(app.get('port'), () => {
  console.log(`Meet your match on PORT: ${app.get('port')} 🌟`);
});
