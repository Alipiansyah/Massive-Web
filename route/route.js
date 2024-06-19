const express = require("express");
const { getNotes, addNotes, updateNotes, deleteNotes, getNotesById } = require("../controller/controller");
const route = express.Router();

route.get("/notes", getNotes);
route.get("/notes/:id", getNotesById);
route.post("/tambahnotes", addNotes);
route.put("/updatenotes/:id", updateNotes);
route.delete("/deletenotes/:id", deleteNotes);

module.exports = route;
