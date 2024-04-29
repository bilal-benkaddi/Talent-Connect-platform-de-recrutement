import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/forgot-password">Forgot Password</Link></li>
        <li><Link to="/reset-password">Reset Password</Link></li>
        <li><Link to="/verify-email">Verify Email</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
