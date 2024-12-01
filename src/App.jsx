import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Introduction from "./components/Introduction"
import Navbar from "./components/Navbar"
import { PhotoGallery } from "./components/PhotoGallery"


function App() {

  return (
    <Router>
      <div className="bg-blue-200 min-h-screen1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Introduction />} />
          <Route path="/gallery" element={<PhotoGallery />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
