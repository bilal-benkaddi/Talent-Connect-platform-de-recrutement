import React, { useState } from 'react';
import { resetPassword } from '../services/authService';

const ResetPassword = ({ match }) => {
  const { token } = match.params;
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState('');

  const handleResetPassword = async () => {
    try {
      await resetPassword(token, password, passwordConfirmation);
    } catch (error) {
      setError('Failed to reset password');
    }
  };

  return (
    <div>
      <input type="      password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="password" placeholder="Confirm Password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
      <button onClick={handleResetPassword}>Reset Password</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ResetPassword;

