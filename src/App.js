import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Import the Navbar component

import './index.css';
import Login from './Components/Login';
import Register from './Components/Register';
import Candidates from './Components/Candidates';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add login state

  const addCandidate = (candidate) => {
    setCandidates([...candidates, candidate]);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      {isLoggedIn && <Navbar />} {/* Conditionally render Navbar */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/register"
            element={
              isLoggedIn ? (
                <Register addCandidate={addCandidate} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/candidates"
            element={
              isLoggedIn ? (
                <Candidates candidates={candidates} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
