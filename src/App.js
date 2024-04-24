import React from 'react';
import './App.css';
import Cursor from './Components/Cursor/Cursor';
import Footer from './Components/Footer/Footer';
import Nav from './Components/Navbar/Nav';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';
import Work from './Components/Work/Work';
import MySelf from './Components/MySelf/MySelf';

function App() {
  
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route exact path='/work' element={<Work/>} />
        <Route exact path='/self' element={<MySelf/>} />
      </Routes>
      <Footer />
      <Cursor />

      
    </>
  );
}

export default App;
