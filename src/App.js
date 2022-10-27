import React from 'react';
import './App.css';
import NavBar from './student-page/components/Navbar'
import Sidebar from './student-page/components/Sidebar';
import Resources from './student-page/components/Resources';
import CalenDar from './student-page/components/Calendar';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
// import Tutorials from './student-page/components/Tutorials';
// import Learn from './student-page/components/Learn';
// import Events from './student-page/components/Events';
// import Discussions from './student-page/components/Discussions';
function App() {
  return (
    <Router>
      <div className="App">
          <NavBar/> 

          <div className='side-res'>
            <Sidebar />
            {/* <Tutorials /> */}
            <Resources />    
            <CalenDar/>  
          </div>
          {/* <Routes>
            <Route exact path='/' element={<Tutorials/>}>
            {/* <Tutorials/> */}
            {/* </Route> 
            <Route  path='learn'>
            <Learn/>
            </Route> 
            <Route  path='/events'>
            <Events/>
            </Route> 
          </Routes>
         
         */}
      </div>
     </Router>
  );
}

export default App;
