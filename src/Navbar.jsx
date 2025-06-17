import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <nav style={styles.navbar} ref={navRef}>
      <div style={styles.logo}>🩺 HealthCare</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/doctors" style={styles.link}>Doctor's List</Link>
        {/* <Link to="/contact" style={styles.link}>Contact</Link> */}
        <Link to="/profile" style={styles.link}>Profile</Link>
        <Link to="/login" style={styles.link}>Login</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: '#0f62fe',
    padding: '10px 30px', // increase side padding to avoid overflow
    color: '#fff',
    fontFamily: 'Segoe UI, sans-serif',
    boxShadow: '0 2px 8px rgba(236, 35, 35, 0.58)',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
    boxSizing: 'border-box', // ensure padding included in width
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#fff',
    marginRight: '30px',
  },
  links: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',  // allow wrapping on smaller screens
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px',
    transition: 'color 0.3s ease',
    whiteSpace: 'nowrap', // prevent link text wrapping individually
  },
};


export default Navbar;
