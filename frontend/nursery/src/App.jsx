import React, { useState } from 'react';
import './App.css'
import PlantForm from '../components/PlantForm';

const App = () => {
    return (
      //call Plant Form
        <div>
            <h1>Plant Form</h1>
            <PlantForm />
        </div>
    );
};

export default App;
