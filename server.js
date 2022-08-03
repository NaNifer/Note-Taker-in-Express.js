const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

// Allows environment created route to exist, or creates one at 3001
const PORT = process.env.PORT || 3001;

// Allows express to parse json
app.use(express.json());
// Allows routes to public folders
app.use(express.static('public'));
// Access to routes folder
app.use(routes);


// Paths for get routes
// Root route to index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// Routes to notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Catches all to send to home page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

// Listens to port & displays in console log
app.listen(PORT, () => console.log(`Server is listening to PORT ${PORT}`));