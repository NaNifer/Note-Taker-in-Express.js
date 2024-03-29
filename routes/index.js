const router = require('express').Router();
const path = require("path");
const apiRoutes = require('./apiRoutes')

router.use('/api', apiRoutes);

// //GET /notes should return the notes.html file
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;
