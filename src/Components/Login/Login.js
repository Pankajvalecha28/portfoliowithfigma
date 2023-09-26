import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Login.css';
import loginData from '../../Data/LoginData.js';


const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const user = loginData.users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      
      navigate('/homepage');
    } else {
      
      setErrorMessage('Invalid username or password.');
    }
  };
  

  return (
    <div className="LoginData">
    <div className="login-container">
      <h1 className='contentlogin'>Login</h1>
      <form onSubmit={handleLogin}>
        <input className='fill'
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input className='fill'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className='login-button' type="submit">Login</button>
      </form>
      <p className="error-message">{errorMessage}</p>
    </div>
    </div>
  );
};

export default Login;
