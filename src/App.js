import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import Main from './components/Main';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Main />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;
