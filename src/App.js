import React from 'react';
import './App.css';
import NavBar from './student-page/components/Navbar'
import Sidebar from './student-page/components/Sidebar';
import Resources from './student-page/components/Resources';
import CalenDar from './student-page/components/Calendar';
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className='side-res'>
      <Sidebar />
      <Resources />
      <CalenDar />
      </div>
     
        <Routes>
          <Route path="/resources" element={<Resources />} />
          <Route path="/calendar" element={<CalenDar />} />

        </Routes>
    </BrowserRouter>
  
  )
}
export default App;









