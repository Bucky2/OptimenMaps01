import Note from "../models/Note";

export const renderNoteForm = (req, res) => {
  res.render("notes/new-note");
};

export const createNewNote = async (req, res) => {
  const { title, description,comments,status,priority,pages,email} = req.body;
  const errors = [];
  if (!title) {
    errors.push({ text: "¡Porfavor escriba un Titulo" });
  }
  if (!description) {
    errors.push({ text: "¡Porfavor escriba una Descripción" });
  }
  if (errors.length > 0) {
    res.render("notes/new-note", {
      errors,
      title,
      description,
      comments,
      status,
      priority,
      pages,
      email
    });
  } else {
    const newNote = new Note({ title, description,comments,status,priority,pages,email});
    newNote.user = req.user.id;
    await newNote.save();
    req.flash("success_msg", "La nota se ha agregado correctamente");
    res.redirect("/notes");
  }
};

export const renderNotes = async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
    .sort({ date: "desc" })
    .lean();
  res.render("notes/all-notes", { notes });
};

export const renderEditForm = async (req, res) => {
  const note = await Note.findById(req.params.id).lean();
  if (note.user != req.user.id) {
    req.flash("error_msg", "No Autorizado");
    return res.redirect("/notes");
  }
  res.render("notes/edit-note", { note });
};

export const updateNote = async (req, res) => {
  const { title, description,comments,status,priority,pages,email} = req.body;
  await Note.findByIdAndUpdate(req.params.id, { title, description,comments,status,priority,pages,email});
  req.flash("success_msg", "La nota se ha actualizado correctamente");
  res.redirect("/notes");
};

export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "La nota se ha eliminado correctamente");
  res.redirect("/notes");
};
