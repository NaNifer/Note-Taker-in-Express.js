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



// //when app get '/', will return a file with public/index
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// //when app get '/notes', will return a file with public/notes
// app.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'notes.html'));
// });

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('api/notes', (req, res) => {
//     res.json(notes)
// });

// app.post('api/notes', (req, res) => {
//     let newNote = {
//         title: req.body.title,
//         text: req.body.text,
//         id: uuid()
//     }
//     notes.push(newNote);
//     res.json;
// });

// Listens to port & displays in console log
app.listen(PORT, () => console.log(`Server is listening to PORT ${PORT}`));