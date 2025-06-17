import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import useDoctorStore from '../store';
import backgroundImage from '../assets/doc.avif';

const doctors = [
  { id: 1, name: 'Dr. Kavya', specialty: 'Cardiologist', location: 'Chennai' },
  { id: 2, name: 'Dr. Arjun', specialty: 'Neurologist', location: 'Coimbatore' },
  { id: 3, name: 'Dr. Priya', specialty: 'Dermatologist', location: 'Madurai' },
];

const DoctorList = () => {
  const setSelectedDoctorId = useDoctorStore((state) => state.setSelectedDoctorId);
  const navigate = useNavigate();
  const cardRefs = useRef([]);
  const containerRef = useRef(null);

  // Track hovered card index for blur effect
  const hoveredIndex = useRef(null);

  // GSAP hover zoom and blur other cards logic
  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const onMouseEnter = () => {
        hoveredIndex.current = index;
        // Zoom in the hovered card
        gsap.to(card, { scale: 1.1, duration: 0.3, ease: 'power3.out', zIndex: 10 });

        // Blur other cards
        cardRefs.current.forEach((otherCard, i) => {
          if (i !== index && otherCard) {
            gsap.to(otherCard, { filter: 'blur(3px)', opacity: 0.5, duration: 0.3 });
          }
        });
      };

      const onMouseLeave = () => {
        hoveredIndex.current = null;
        // Reset scale and zIndex
        gsap.to(card, { scale: 1, duration: 0.3, ease: 'power3.out', zIndex: 1 });

        // Reset other cards
        cardRefs.current.forEach((otherCard) => {
          if (otherCard) {
            gsap.to(otherCard, { filter: 'blur(0px)', opacity: 1, duration: 0.3 });
          }
        });
      };

      card.addEventListener('mouseenter', onMouseEnter);
      card.addEventListener('mouseleave', onMouseLeave);

      // Cleanup
      return () => {
        card.removeEventListener('mouseenter', onMouseEnter);
        card.removeEventListener('mouseleave', onMouseLeave);
      };
    });
  }, []);

  const handleViewProfile = (id) => {
    setSelectedDoctorId(id);
    navigate('/profile');
  };

  return (
    <div style={styles.container} ref={containerRef}>
      <div style={styles.overlay}>
        <h2 style={styles.heading}>Doctor List</h2>
        {doctors.map((doc, index) => (
          <div
            key={doc.id}
            ref={(el) => (cardRefs.current[index] = el)}
            style={styles.doctorCard}
          >
            <div>
              <strong>{doc.name}</strong> - {doc.specialty} ({doc.location})
            </div>
            <button
              onClick={() => handleViewProfile(doc.id)}
              style={styles.button}
              onMouseEnter={(e) =>
                gsap.to(e.currentTarget, {
                  scale: 1.1,
                  backgroundColor: '#0056d2',
                  boxShadow: '0 0 10px #007BFF',
                  duration: 0.3,
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.currentTarget, {
                  scale: 1,
                  backgroundColor: '#007BFF',
                  boxShadow: 'none',
                  duration: 0.3,
                })
              }
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '40px',
    borderRadius: '12px',
    color: '#fff',
    width: '80%',
    maxWidth: '800px',
  },
  heading: {
    fontSize: '36px',
    marginBottom: '20px',
    textAlign: 'center',
  },
  doctorCard: {
    backgroundColor: '#ffffff20',
    padding: '15px 20px',
    borderRadius: '8px',
    marginBottom: '12px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    cursor: 'pointer',
    position: 'relative',
    zIndex: 1,
    transformOrigin: 'center center',
    willChange: 'transform, filter, opacity',
  },
  button: {
    padding: '8px 16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  },
};

export default DoctorList;
