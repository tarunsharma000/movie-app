import React, { useEffect, useState } from 'react'
import Home from "./Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Login';
function App() {
  return (
    <div>
      <Router>
      <Routes>
          <Route path="/" element={[<Login/>]}/>
        </Routes>
      <Routes>
          <Route path="/home" element={[<Home/>]}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
