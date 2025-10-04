import React from 'react';
import { Link } from 'react-router-dom';
import { FaStickyNote } from 'react-icons/fa';

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <FaStickyNote className="text-6xl text-gray-400 mb-4" />
      <h2 className="text-2xl font-bold text-gray-700 mb-2">No Notes Found</h2>
      <p className="text-gray-500 mb-4">
        You don’t have any notes yet. Start by creating a new note.
      </p>
      <Link
        to="/create"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
      >
        Create Note
      </Link>
    </div>
  );
};

export default NotesNotFound;
