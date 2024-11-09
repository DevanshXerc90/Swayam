// src/pages/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login credentials: ", credentials);
  };

  return (
    <div className="login-page">
      <h2 className="login-title">Welcome Back to Swayam</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
