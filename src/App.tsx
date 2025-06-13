import React from 'react';

const App: React.FC = () => {
  return (
    <div style={styles.heroContainer}>
      <div style={styles.overlay}>
        <div style={styles.contentContainer}>
          <h1 style={styles.title}>CHAMPIONSHIP MOMENTS</h1>
          <p style={styles.subtitle}>Experience the thrill of sports like never before</p>
          <div style={styles.buttonContainer}>
            <button style={styles.primaryButton}>WATCH HIGHLIGHTS</button>
            <button style={styles.secondaryButton}>SCHEDULE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroContainer: {
    backgroundImage: 'url("https://source.unsplash.com/random/1600x900/?sports")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    width: '100%',
    position: 'relative' as 'relative',
    color: 'white',
    fontFamily: '"Roboto", "Arial", sans-serif',
  },
  overlay: {
    position: 'absolute' as 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    textAlign: 'center' as 'center',
    maxWidth: '800px',
    padding: '0 20px',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    letterSpacing: '2px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '40px',
    fontWeight: '300',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap' as 'wrap',
  },
  primaryButton: {
    backgroundColor: '#e63946',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    letterSpacing: '1px',
    ':hover': {
      backgroundColor: '#c1121f',
      transform: 'translateY(-2px)',
    },
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '15px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    borderRadius: '4px',
    transition: 'all 0.3s ease',
    letterSpacing: '1px',
    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'translateY(-2px)',
    },
  },
};

export default App;