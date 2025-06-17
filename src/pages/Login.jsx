import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Alert } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Login.css';

const registeredUser = {
  username: 'kavin',
  password: '1516',
  email: 'kavin15@gmail.com',
};

export default function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('danger');
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      setMessage('Please fill in both username and password.');
      setVariant('danger');
      return;
    }

    if (
      form.username === registeredUser.username &&
      form.password === registeredUser.password
    ) {
      setMessage('Login successful!');
      setVariant('success');
      setTimeout(() => {
        navigate('/UserHome', { state: { user: registeredUser } });
      }, 1000);
    } else {
      setMessage('Invalid username or password.');
      setVariant('danger');
    }
  };

  return (
    <div className="login-background">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card"
      >
        <h3 className="text-center text-white mb-2">Welcome back</h3>
        <p className="text-center text-light mb-4">
          Please enter your credentials to sign in.
        </p>
        {message && <Alert variant={variant}>{message}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              autoComplete="off"
              className="custom-input"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              autoComplete="off"
              className="custom-input"
            />
          </Form.Group>

          <Button type="submit" className="w-100 login-button mb-3">
            Login
          </Button>

          {/* Reference credentials */}
          <div className="text-light small text-center mt-2">
            <div><strong>Use this for demo login:</strong></div>
            <div>👤 <strong>Username:</strong> kavin</div>
            <div>🔑 <strong>Password:</strong> 1516</div>
          </div>
        </Form>
      </motion.div>
    </div>
  );
}
