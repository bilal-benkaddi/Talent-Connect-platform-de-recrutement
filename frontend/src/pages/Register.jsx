import  { useState } from 'react';

const Register = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [dateNaissance, setDateNaissance] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [telephone, setTelephone] = useState('');
  const [adresse, setAdresse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here, such as sending the registration data to a server
    console.log('Nom:', nom);
    console.log('Prénom:', prenom);
    console.log('Date de naissance:', dateNaissance);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Téléphone:', telephone);
    console.log('Adresse:', adresse);
  };

  return (
    <div className="container">
      <h2 className="text-center mt-5 mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="nom" className="form-label">Nom</label>
              <input type="text" className="form-control" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="prenom" className="form-label">Prénom</label>
              <input type="text" className="form-control" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="dateNaissance" className="form-label">Date de Naissance</label>
          <input type="date" className="form-control" id="dateNaissance" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="telephone" className="form-label">Téléphone</label>
          <input type="tel" className="form-control" id="telephone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label htmlFor="adresse" className="form-label">Adresse</label>
          <input type="text" className="form-control" id="adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
    </div>
  );
};

export default Register;
