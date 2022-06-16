import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/Sign-Up';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
          <Route exact path="/products" element={<Products/>} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/sign-up" element={<SignUp/>} />
        </Routes>
        <HeroSection />
        <Cards />
        <Footer />
      </Router>
    </>
  );
}

export default App;
