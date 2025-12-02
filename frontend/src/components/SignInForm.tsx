import React, { useState } from 'react';
import axios from 'axios';
import styles from './AuthForms.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface SignInFormProps {
  onSignInSuccess: (token: string) => void;
}

const SignInForm: React.FC<SignInFormProps> = ({ onSignInSuccess }) => {
  const { siteConfig } = useDocusaurusContext();
  const API_BASE_URL = siteConfig.customFields?.API_BASE_URL || 'http://localhost:8000';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/token`,
        new URLSearchParams({
          username: username,
          password: password,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );
      setMessage('Login successful!');
      console.log('Login response:', response.data);
      onSignInSuccess(response.data.access_token);
      // Clear form
      setUsername('');
      setPassword('');
    } catch (err: any) {
      console.error('Login error:', err.response?.data || err.message);
      setError(err.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit} className={styles.authForm}>
        <div className={styles.formGroup}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className={styles.authButton}>Sign In</button>
      </form>
      {message && <p className={styles.successMessage}>{message}</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default SignInForm;
