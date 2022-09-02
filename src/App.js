import React from 'react';
import { useEffect } from 'react';
import { sampleData } from './sampleData';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import DashboardPage from "./components/dashboardPage/dashboardPage";
import LoginPage from "./components/loginPage/loginPage";
import RegisterUser from './components/registerPage/registerPage';
import Profile from './components/profile/profile';

function App() {
  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
