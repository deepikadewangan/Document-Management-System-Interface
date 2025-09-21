import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import DashboardPage from "./pages/DashboardPage";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router> 
  );
}

export default App;
