
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,


} from "react-router-dom"

import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import Auth from './hoc/auth'

function App() {
  // const NewLandingPage = Auth(LandingPage, null);

  // const NewLoginPage = Auth(LoginPage, false);

  // const NewRegisterPage = Auth(RegisterPage, false);
  const navigate = useNavigate();
  return (
    
      <div>
        <Routes>
          <Route path="/" element={Auth(LandingPage, null)}/>
          <Route path="/login" element={Auth(LoginPage, false)}/>
          <Route path="/register" element={Auth(RegisterPage, false)}/>
        </Routes>
      </div>
    
  );
}

export default App;
