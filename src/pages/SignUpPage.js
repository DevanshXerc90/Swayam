// src/pages/SignUpPage.js
import React, { useState } from 'react';
import './SignUpPage.css';

function SignUpPage() {
  const [user, setUser] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User registered: ", user);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>
        <p className="signup-subtitle">Join Swayam and start learning today!</p>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>
          <button className="signup-button" type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
