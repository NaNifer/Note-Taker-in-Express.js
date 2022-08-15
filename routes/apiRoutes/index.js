const fs = require('fs');
const router = require('express').Router();
const util = require('util');
const { v4: uuidv4 } = require("uuid");

const notes = require("../db/db.json");
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
    notes.push(newNote);
    writeFile("db/db.json", notes);
    res.json(notes);
    console.log("Note Added!");
  } else {
    res.error("Whoops, there was an error adding the note!");
  }
});


// DELETE note route
router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id; 
  // Array of all notes minus the URL id note
  const notesKeep = notes.filter((note) => note.id !== noteId);
  writeFile("db/db.json", notesKeep);
  res.json(notesKeep);
});

module.exports = router;