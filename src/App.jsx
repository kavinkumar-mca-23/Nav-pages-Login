import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import DoctorList from './pages/DoctorList';
import Contact from './pages/Contact';
import Profile from './pages/Profile';
import Login from './pages/Login';
import UserHome from './pages/UserHome';
import { gsap } from 'gsap';

// Create a wrapper component to use hooks inside Router
const AnimatedRoutes = () => {
  const location = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    // Animate page content on every route change
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
    );
  }, [location.pathname]);

  return (
    <div ref={containerRef} style={{ padding: '20px' }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<DoctorList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userHome" element={<UserHome />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
};

export default App;
