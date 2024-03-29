const fs = require('fs');
const router = require('express').Router();
const util = require('util');
const { v4: uuidv4 } = require("uuid");

const db = require("../../db/db.json");
const { json } = require("express");

const {
    readFile,
    appendFile,
    writeFile,
  } = require("../../utils/utils");


// GET Route for retrieving all the notes
router.get("/notes", (req, res) => {
  readFile("db/db.json").then((data) => res.json(JSON.parse(data)));
});

// POST Route for a new notes
router.post("/notes", (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;
  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    db.push(newNote);
    writeFile("db/db.json", db);
    res.json(db);
    console.log("Note Added!");
  } else {
    res.error("Whoops, there was an error adding the note!");
  }
});


// DELETE note route
router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id; 
  // Array of all notes minus the URL id note
  const allNotesSaved = db.filter((note) => db.id !== noteId);
  writeFile("db/db.json", allNotesSaved);
  res.json(allNotesSaved);
});


module.exports = router;