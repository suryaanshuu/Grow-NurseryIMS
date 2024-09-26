import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import InfoBox from './InfoBox';

const PlantInfo = () => {
  const { plantName } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/plant?name=${plantName}`);
        const data = await response.json();
        console.log("Received Data:", data);
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [plantName]);

  console.log("Data in Component:",data);

  return (
    <div>
      <InfoBox key={JSON.stringify(data)} data={data} />
    </div>
  );
};

export default PlantInfo;