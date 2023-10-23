import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';
import EcommercePage from './EcommercePage'; // Import the EcommercePage component
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/ecommerce" element={<EcommercePage />} /> {/* Route for the EcommercePage */}
      </Routes>
      <ToastContainer />
    </div>
  );
}




export default App;

