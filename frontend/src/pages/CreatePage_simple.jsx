import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { toast } from "react-hot-toast";
import api from "../lib/axios.js";
import { localStorageAPI } from "../lib/localStorage.js";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true);
    try {
      // Try API first, fallback to localStorage
      try {
        await api.post("/notes", { title, content });
        toast.success("Note created Successfully!");
      } catch (apiError) {
        console.log("API unavailable, using localStorage");
        localStorageAPI.createNote({ title, content });
        toast.success("Note created locally! (Demo mode)");
      }
      
      setTitle("");
      setContent("");
      navigate("/");
    } catch (error) {
      console.error("Error creating note:", error);
      toast.error("Failed to create note");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <FaArrowLeft className="text-lg" />
          Back to Notes
        </Link>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Create New Note</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                placeholder="Enter note title..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            {/* Content Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                placeholder="Write your note here..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-medium px-6 py-2 rounded-md"
              >
                {loading ? "Creating..." : "Create Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
