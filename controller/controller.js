const { query } = require("../database/Db");

const getNotes = async (req, res) => {
  try {
    const result = await query("SELECT * FROM notes");
    return res.status(200).json({ data: result });
  } catch (error) {
    console.log(error);
  }
};

const getNotesById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query("SELECT * FROM notes where id = ?", [id]);
    return res.status(200).json({ data: result });
  } catch (error) {
    return res.status(400).json({ pesan: "ada yg salah", error });
  }
};

const addNotes = async (req, res) => {
  try {
    const { title, datetime, note } = req.body;
    await query("INSERT INTO notes ( title, datetime, note) VALUES(?,?,?)", [title, datetime, note]);
    return res.status(200).json({
      pesan: "penambahan notes berhasil",
      data: {
        ...req.body, //harus memakai JSON
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateNotes = async (req, res) => {
  try { 
    const { id, } = req.params;
    const { title, datetime, note } = req.body;
    await query("UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?", [title, datetime, note, id]);
    return res.status(200).json({
      pesan: "perubahan notes berhasil",
      data: {
        ...req.body,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const deleteNotes = async (req, res) => {
  const { id } = req.params;
  try {
    await query("DELETE FROM notes where id = ?", [id]);
    return res.status(200).json({
      pesan: "hapus notes berhasil",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getNotes,
  getNotesById,
  addNotes,
  updateNotes,
  deleteNotes,
};
