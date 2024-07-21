"use client"

import React, {useState, useEffect}  from 'react';
//import App from './App';  // Adjust the path as needed
import {getPlantData} from './api/getPlantData'; // Adjust the path
import { useRouter } from 'next/router';

function MyPage() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  //const [error, setError] = useState<string | null>(null);
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted: ', inputValue);
    setInputValue('');    
    const data = await getPlantData(inputValue);
    router.push('./App');
    // return (
    //   <div>
    //     <App data={data} />
    //   </div>
    // );
  }

return (
  <div>
    <h1>My Page</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="textInput">Enter Text:</label>
      <input type="text" id ="textInput" value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  </div>
)
}

export default MyPage;


// useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('/api/getplantdata?name=rose');
//         if (!response.ok) {
//           throw new Error(`Error: ${response.statusText}`);
//         }
//       } catch (error: any) {
//         setError(error.message);
//       }
//     };

//   fetchData();
// }, []);