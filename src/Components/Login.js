// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'satyam') {
      onLogin(); // Call onLogin prop to set isLoggedIn to true
      navigate('/register'); // Navigate to register page
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="header">
        <h1>Sanwaliya Seth Mitra Mandal Jeeran</h1>
      </div>
      <div className="login-container">
        <div className="login-card">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />
          <button onClick={handleLogin} className="login-button">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
