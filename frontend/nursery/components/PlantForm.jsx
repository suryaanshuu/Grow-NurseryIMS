import React, { useState } from 'react';

const PlantForm = () => {
  const [plantName, setPlantName] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //From the response, send a post request to /api/plant
    //convert the response to json and log the plant data
    try {
      const response = await fetch(`/api/plant`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: plantName }),
      });
      const data = await response.json();
      setSuccess(true);
      console.log('Success:', data);
    } catch (error) {
      setError(error.message);
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Plant name:
        <input
          type="text"
          value={plantName}
          onChange={(e) => setPlantName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>Plant added successfully!</div>}
    </form>
  );
};

export default PlantForm;