import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Sidebar from './components/Navbar/Sidebar';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // <div>
    <Router>

      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/signin" element={< SigninPage />} />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
