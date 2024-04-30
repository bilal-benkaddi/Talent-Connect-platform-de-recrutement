import  { useState } from 'react';
import { AxiosClient } from '../api/axios';
//import { useHistory } from 'react-router-dom';  


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
      await AxiosClient.get('/sanctum/csrf-cookie');
      const response = await AxiosClient.post('/api/login', { email, password }); // Replace '/api/signin' with your actual backend signin endpoint
     console.log(response);
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
