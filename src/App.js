import React from 'react';
import './App.css';
import NavBar from './student-page/components/Navbar'
import Sidebar from './student-page/components/Sidebar';
import Resources from './student-page/components/Resources';
import CalenDar from './student-page/components/Calendar';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth"

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
          <Route path="/auth" element={<Auth />} />

         </Routes>
    </BrowserRouter>
  )
}

export default App;









