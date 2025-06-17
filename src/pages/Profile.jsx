import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import useDoctorStore from '../store';
import backgroundImage from '../assets/profile.avif';

const doctors = [
  { id: 1, name: 'Dr. Kavya', specialty: 'Cardiologist', location: 'Chennai', },
  { id: 2, name: 'Dr. Arjun', specialty: 'Neurologist', location: 'Coimbatore' },
  { id: 3, name: 'Dr. Priya', specialty: 'Dermatologist', location: 'Madurai' },
];

const Profile = () => {
  const selectedDoctorId = useDoctorStore((state) => state.selectedDoctorId);
  const navigate = useNavigate();
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      const scaleValue = doctors[index].id === selectedDoctorId ? 1.05 : 0.9;
      const opacity = doctors[index].id === selectedDoctorId ? 1 : 0.4;

      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.8 },
        {
          opacity,
          scale: scaleValue,
          duration: 0.6,
          delay: index * 0.1,
          ease: 'power3.out',
        }
      );
    });
  }, [selectedDoctorId]);

  const handleBack = () => {
    navigate('/doctors');
  };

  return (
    <div style={styles.page}>
      <div style={styles.overlay}>
        <h2 style={styles.heading}>Doctor Profile</h2>

        <div style={styles.cardContainer}>
          {doctors.map((doc, index) => (
            <div
              key={doc.id}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{
                ...styles.card,
                filter: selectedDoctorId !== doc.id ? 'blur(4px)' : 'none',
                backgroundColor: selectedDoctorId === doc.id ? '#ffffffdd' : '#ffffff99',
                transform: selectedDoctorId === doc.id ? 'scale(1.05)' : 'scale(0.95)',
                zIndex: selectedDoctorId === doc.id ? 1 : 0,
              }}
            >
              <h3 style={styles.name}>{doc.name}</h3>
              {selectedDoctorId === doc.id && (
                <>
                  <p style={styles.detail}><strong>Specialty:</strong> {doc.specialty}</p>
                  <p style={styles.detail}><strong>Location:</strong> {doc.location}</p>
                </>
              )}
            </div>
          ))}
        </div>

        <button style={styles.backButton} onClick={handleBack}>
          ← Back to Doctor List
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px 20px',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '1000px',
    height: '90%',
    overflowY: 'auto',
    boxShadow: '0 0 20px rgba(0,0,0,0.3)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '32px',
    color: '#fff',
    marginBottom: '30px',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: '24px',
    borderRadius: '12px',
    transition: 'transform 0.4s ease, filter 0.3s ease',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#ffffffdd',
  },
  name: {
    fontSize: '24px',
    color: '#2c3e50',
    marginBottom: '10px',
  },
  detail: {
    fontSize: '16px',
    color: '#555',
    margin: '6px 0',
  },
  backButton: {
    marginTop: '40px',
    padding: '12px 24px',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default Profile;
