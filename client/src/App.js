import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route }  from 'react-router-dom';
import Home from './components/Home';
import EditDetails from './components/editDetails';
import UserDetails from './components/userDetails';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/edit/:id' element={<EditDetails />}/>
      <Route path='/users' element={<UserDetails />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
