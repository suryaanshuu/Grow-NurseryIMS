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

// Start from here

// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import LandingPageBody from './Components/LandingPageBody';
// import PlantInfo from './Components/PlantInfo';
// import QRCodeGenerator from './Components/QRCodeGenerator';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <div>
//         <main>
//           <Routes>
//             <Route path="/" element={<LandingPageBody />} exact />
//             <Route path="/plant/:plantName" element={<PlantInfo  />} />
//             <Route path="*" element={<div>Not Found</div>} />
//             <Route path='/QRCodeGenerator' element={<QRCodeGenerator />} />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;

// /frontend/src/App.jsx
  
// /frontend/src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPageBody from './Components/LandingPageBody';
import PlantInfo from './Components/PlantInfo';
import QRCodeGenerator from './Components/QRCodeGenerator';
import Login from './Components/Login';
import Admin from './Components/Admin';

function App() {
  const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (!token) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={
          <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
        } />
        <Route path="/" element={<LandingPageBody />} exact />
        <Route path="/plant/:plantName" element={<PlantInfo  />} />
        <Route path="*" element={<div>Not Found</div>} />
        <Route path='/QRCodeGenerator' element={<QRCodeGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
