import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Page Not Found</p>
      <p style={styles.subText}>Sorry, the page you are looking for does not exist.</p>
      <Link to="/" style={styles.link}>Go to Homepage</Link>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    textAlign: 'center',
  },
  heading: {
    fontSize: '10rem',
    margin: '0',
    color: '#dc3545',
  },
  text: {
    fontSize: '2rem',
    margin: '0',
    color: '#343a40',
  },
  subText: {
    fontSize: '1rem',
    color: '#6c757d',
    marginBottom: '1rem',
  },
  link: {
    fontSize: '1rem',
    color: '#007bff',
    textDecoration: 'none',
  }
};

export default NoMatch;
