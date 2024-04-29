import React, { useState } from 'react';
import { forgotPassword } from '../services/authService';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    try {
      await forgotPassword(email);
      setSent(true);
    } catch (error) {
      setError('Failed to send password reset email');
    }
  };

  return (
    <div>
      {sent ? (
        <p>Password reset email sent. Check your inbox.</p>
      ) : (
        <div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={handleForgotPassword}>Send Password Reset Email</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default ForgotPassword;
