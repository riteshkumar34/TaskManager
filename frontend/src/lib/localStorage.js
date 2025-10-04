// Temporary localStorage implementation for GitHub Pages demo
export const localStorageAPI = {
  // Get all notes
  getNotes: () => {
    const notes = localStorage.getItem('taskmanager_notes');
    return notes ? JSON.parse(notes) : [];
  },

  // Create a new note
  createNote: (note) => {
    const notes = localStorageAPI.getNotes();
    const newNote = {
      _id: Date.now().toString(), // Simple ID generation
      ...note,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    notes.unshift(newNote); // Add to beginning
    localStorage.setItem('taskmanager_notes', JSON.stringify(notes));
    return newNote;
  },

  // Get a single note by ID
  getNoteById: (id) => {
    const notes = localStorageAPI.getNotes();
    return notes.find(note => note._id === id);
  },

  // Update a note
  updateNote: (id, updatedNote) => {
    const notes = localStorageAPI.getNotes();
    const index = notes.findIndex(note => note._id === id);
    if (index !== -1) {
      notes[index] = { 
        ...notes[index], 
        ...updatedNote, 
        updatedAt: new Date().toISOString() 
      };
      localStorage.setItem('taskmanager_notes', JSON.stringify(notes));
      return notes[index];
    }
    return null;
  },

  // Delete a note
  deleteNote: (id) => {
    const notes = localStorageAPI.getNotes();
    const filteredNotes = notes.filter(note => note._id !== id);
    localStorage.setItem('taskmanager_notes', JSON.stringify(filteredNotes));
    return true;
  }
};
