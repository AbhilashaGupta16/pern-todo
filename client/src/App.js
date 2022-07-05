import './App.css';

import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import InputTodo from './components/InputTodo';
import Navbar from './components/Navbar';
import ListTodo from './components/ListTodo';
import Main from './components/Main';

function App() {
  
  return (
    <Router>
      <div>
        <Navbar/>
        <div>
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/hh-todo" element={<InputTodo/>} />
          <Route exact path="/hh-todo" element={<ListTodo/>} />
        </Routes>
        </div>
        
      </div>
      </Router>
  );
}

export default App;
