import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      {/* Button Section */}
      <div className="flex flex-wrap gap-4 mb-6">
            
      </div>
      {/* Routes Section */}
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/note/:id" element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
