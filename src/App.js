import React from 'react';
import './App.css';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Body from './Body';
import Dashboard from './Dasboard';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>    
        <div className="App">
        <Navbar />

            <Routes>
              <Route path='/' element={<Body />} exact></Route>
              <Route path='/dashboard' element={<Dashboard />} exact></Route>
            </Routes>
          
        </div>
    </BrowserRouter>
      );
}

export default App;