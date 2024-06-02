import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            {/* Ajoutez d'autres routes ici si nécessaire */}
          </Routes>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
