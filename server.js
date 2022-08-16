const express = require('express');
const path = require('path');
const app = express();

const api = require('./routes/apiRoutes/index');
const html = require('./routes/index')
const notes = require('./db/db.json');
const { uuid } = require('uuid');

// Allows environment created route to exist, or creates one at 3001
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
// Allows express to parse json
app.use(express.json());
// Allows routes to public folders
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);
app.use('/', html);

// Listens to port & displays in console log
app.listen(PORT, () => console.log(`Server is listening to PORT ${PORT}`));