import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TestProvider } from './context/TestContext';
import { ArticleProvider } from './context/ArticleContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Tests from './pages/Tests';
import Articles from './pages/Articles';
import Saved from './pages/Saved';
import Login from './pages/Login';
import Register from './pages/Register';
import TestTaking from './pages/TestTaking';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <Router>
      <AuthProvider>
        <TestProvider>
          <ArticleProvider>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Navbar />
              <main className="flex-grow container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/tests" element={<Tests />} />
                  <Route path="/tests/:type" element={<TestTaking />} />
                  <Route path="/articles" element={<Articles />} />
                  <Route path="/articles/:id" element={<ArticleDetail />} />
                  <Route path="/saved" element={<Saved />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                </Routes>
              </main>
              <Footer />
            </div>
          </ArticleProvider>
        </TestProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;