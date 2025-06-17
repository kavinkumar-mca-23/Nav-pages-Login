import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaHeartbeat, FaStethoscope, FaHospitalAlt } from 'react-icons/fa';
import backgroundImage from '../assets/hm.avif';

const Home = () => {
  const overlayRef = useRef(null);
  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const iconsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      overlayRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }
    )
      .fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.6'
      )
      .fromTo(
        subheadingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        iconsRef.current,
        { opacity: 0, scale: 0.5, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.2,
        },
        '-=0.3'
      );
  }, []);

  // Helper to add refs for icons
  const addToRefs = (el) => {
    if (el && !iconsRef.current.includes(el)) {
      iconsRef.current.push(el);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay} ref={overlayRef}>
        <h2 style={styles.heading} ref={headingRef}>Welcome to MediConnect</h2>
        <p style={styles.subheading} ref={subheadingRef}>
          Find the best doctors and connect with care.
        </p>
        <div style={styles.iconRow}>
          <FaHeartbeat
            size={50}
            color="#e63946"
            style={styles.icon}
            ref={addToRefs}
          />
          <FaStethoscope
            size={50}
            color="#457b9d"
            style={styles.icon}
            ref={addToRefs}
          />
          <FaHospitalAlt
            size={50}
            color="#2a9d8f"
            style={styles.icon}
            ref={addToRefs}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px 60px',
    borderRadius: '16px',
    textAlign: 'center',
    color: '#ffffff',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
    maxWidth: '600px',
  },
  heading: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  subheading: {
    fontSize: '24px',
    marginBottom: '30px',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
  },
  icon: {
    cursor: 'default',
  },
};

export default Home;
