import React, {useState, useEffect}  from 'react';
import App from './App';  // Adjust the path as needed
import getPlantData from './api/getPlantData'; // Adjust the path
import MyPage from './default';

export default function Home() {
  return (
    <div>
      <MyPage /> 
    </div>
  );
}
