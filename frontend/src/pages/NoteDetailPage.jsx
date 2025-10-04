import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Trash2Icon, ArrowLeftIcon } from 'lucide-react';
import api from '../lib/axios.js';
import { toast } from 'react-hot-toast';

const NoteDetailPage = () => {
  const [note, setNote] = useState({ title: '', content: '' });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error("Error fetching note:", error);
        toast.error("Failed to fetch the note");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully");
      navigate('/');
    } catch (error) {
      console.error("Error deleting note:", error);
      toast.error("Failed to delete note");
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Title and Content cannot be empty");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, {
        title: note.title,
        content: note.content,
      });
      toast.success("Note updated successfully");
    } catch (error) {
      console.error("Error updating note:", error);
      toast.error("Failed to update note");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header Buttons */}
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="btn btn-ghost flex items-center gap-2">
            <ArrowLeftIcon className="w-5 h-5" />
            Back
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-error btn-outline flex items-center gap-2"
          >
            <Trash2Icon className="w-5 h-5" />
            Delete Note
          </button>
        </div>

        {/* Note Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* Title */}
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Title</span>
            </label>
            <input
              type="text"
              placeholder="Note title"
              className="input input-bordered w-full text-gray-800"
              value={note.title}
              onChange={(e) => setNote({ ...note, title: e.target.value })}
            />
          </div>

          {/* Content */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-gray-700">Content</span>
            </label>
            <textarea
              placeholder="Write your note..."
              className="textarea textarea-bordered h-64 resize-none w-full text-gray-800"
              value={note.content}
              onChange={(e) => setNote({ ...note, content: e.target.value })}
            />
          </div>

          {/* Save Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSave}
              className="btn btn-primary px-6 py-2 font-semibold hover:scale-105 transition-transform"
              disabled={saving}
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
