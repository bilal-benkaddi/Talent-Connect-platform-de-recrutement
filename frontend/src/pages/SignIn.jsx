import  { useState } from 'react';
import axios from 'axios';
//import { useHistory } from 'react-router-dom';  


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/axios', { email, password }); // Replace '/api/signin' with your actual backend signin endpoint
      // Assuming your backend returns a token upon successful authentication
      const token = response.data.token;
      // Save token to local storage or session storage for future requests
      localStorage.setItem('token', token);
      // Redirect user to dashboard page upon successful authentication
      //history.push('/dashbord');
    } catch (error) {
      console.error('Sign-in error:', error);
      // Handle sign-in errors (e.g., display error message to user)
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
