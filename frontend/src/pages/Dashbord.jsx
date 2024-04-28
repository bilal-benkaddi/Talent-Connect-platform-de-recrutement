import  { useState, useEffect } from 'react';
import axios from 'axios'; 

const Dashbord = () => {
  const [candidateData, setCandidateData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch candidate data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/candidates'); // Replace '/api/candidates' with your actual backend endpoint
        setCandidateData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Candidate Dashboard</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : candidateData ? (
        <>
          <h3>Welcome, {candidateData.nom} {candidateData.prenom}!</h3>
          <p>Email: {candidateData.email}</p>
          <p>Telephone: {candidateData.telephone}</p>
          <p>Address: {candidateData.Adresse_postale}</p>
          {/* Display more candidate information as needed */}
        </>
      ) : (
        <p>No candidate data found.</p>
      )}
    </div>
  );
};

export default Dashbord;
