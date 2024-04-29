import React, { useEffect, useState } from 'react';
import { verifyEmail } from '../services/authService';

const VerifyEmail = ({ match }) => {
  const { id, hash } = match.params;
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const verify = async () => {
      try {
        await verifyEmail(id, hash);
        setVerified(true);
      } catch (error) {
        setError('Failed to verify email');
      }
    };

    verify();
  }, [id, hash]);

  return (
    <div>
      {verified ? (
        <p>Email verified. You can now login.</p>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default VerifyEmail;
