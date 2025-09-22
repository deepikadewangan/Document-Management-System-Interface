import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import DashboardPage from "./pages/DashboardPage";
import NavigationBar from "./components/Navbar";
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import FileUpload from "./components/FileUpload";
import FileSearch from "./components/FileSearch";


function App() {
  return (
    <Router>
      <NavigationBar />
      <Container className="mt-4">   {/* ✅ Wrap your Routes inside Container */}
        <Routes>
        <Route path="/" element={<DashboardPage />} /> {/* Dashboard as default */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/search" element={<FileSearch />} />
        </Routes>
      </Container>
    </Router> 
  );
}

export default App;
