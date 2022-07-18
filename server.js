const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.static('public'));
app.use(routes);



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});

// Catches all to send to home page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});





app.listen(PORT, () => console.log(`Server is listening to PORT ${PORT}`));