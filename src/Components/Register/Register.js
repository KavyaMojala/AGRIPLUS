// Register.jsx
import React, { useState } from 'react';
import './Register.css';
import logo from '../Images/logo.jpg';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, lastName, phoneNumber, email, password }),
      });

      const data = await response.json();

      if (data.success) {
        // Handle successful registration (e.g., redirect to another page)
        console.log('Registration successful');
      } else {
        // Handle registration failure (e.g., display an error message)
        console.error('Registration failed', data.message);
      }
    } catch (error) {
      console.error('Server error', error);
    }
  };

  return (
    <div className='login-container'>
      <div className="login-form">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
        </div>
        
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email Id</label>
            <input
              type="email"
              placeholder="Enter your email Id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="nav-login-cart">
            <button type="submit">Register</button>
          </div>
        </form>
        <div className="login-links">
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Register;