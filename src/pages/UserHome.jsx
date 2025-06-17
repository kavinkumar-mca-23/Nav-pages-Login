import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Login.css'; // ✅ Reuse the login background & glass style

export default function UserHome() {
  const location = useLocation();
  const user = location.state?.user;

  return (
    <div className="login-background d-flex justify-content-center align-items-start" style={{ minHeight: '100vh', paddingTop: '100px' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card text-center text-white"
      >
        <h2 className="mb-3">👋 Welcome, {user?.username || 'User'}!</h2>
        <p className="mb-2">Your email: <strong>{user?.email || 'N/A'}</strong></p>
        <p className="text-light">You're now on the User Home Page.</p>
      </motion.div>
    </div>
  );
}
