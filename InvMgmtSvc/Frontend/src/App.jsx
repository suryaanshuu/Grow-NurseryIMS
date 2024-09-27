// import React from 'react';
// import LandingPageBody from './Components/LandingPageBody';
// const App = () => {
//   return (
//     <div>

//       <LandingPageBody />

//     </div>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPageBody from './Components/LandingPageBody';
import PlantInfo from './Components/PlantInfo';
import QRCodeGenerator from './Components/QRCodeGenerator';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <main>
          <Routes>
            <Route path="/" element={<LandingPageBody />} exact />
            <Route path="/plant/:plantName" element={<PlantInfo  />} />
            <Route path="*" element={<div>Not Found</div>} />
            <Route path='/QRCodeGenerator' element={<QRCodeGenerator />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;