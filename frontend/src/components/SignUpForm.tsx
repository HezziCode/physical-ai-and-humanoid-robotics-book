import React, { useState } from 'react';
import axios from 'axios';
import styles from './AuthForms.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

const SignUpForm: React.FC = () => {
  const { siteConfig } = useDocusaurusContext();
  const API_BASE_URL = siteConfig.customFields?.API_BASE_URL || 'http://localhost:8000';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('');
  const [aiKnowledge, setAiKnowledge] = useState('');
  const [hardware, setHardware] = useState('');
  const [language, setLanguage] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/signup`, {
        username,
        password,
        experience,
        ai_knowledge: aiKnowledge,
        hardware,
        language,
      });
      setMessage('Signup successful! Please log in.');
      console.log('Signup response:', response.data);
      // Clear form
      setUsername('');
      setPassword('');
      setExperience('');
      setAiKnowledge('');
      setHardware('');
      setLanguage('');
    } catch (err: any) {
      console.error('Signup error:', err.response?.data || err.message);
      setError(err.response?.data?.detail || 'Signup failed');
    }
  };

  return (
    <div className={styles.authContainer}>
      <h2>Sign Up</h2>
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
        <div className={styles.formGroup}>
          <label htmlFor="experience">Experience Level:</label>
          <select
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="aiKnowledge">AI Knowledge:</label>
          <select
            id="aiKnowledge"
            value={aiKnowledge}
            onChange={(e) => setAiKnowledge(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="none">None</option>
            <option value="basic">Basic</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="hardware">Hardware Setup:</label>
          <select
            id="hardware"
            value={hardware}
            onChange={(e) => setHardware(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="laptop">Laptop</option>
            <option value="desktop">Desktop</option>
            <option value="jetson">NVIDIA Jetson</option>
            <option value="robot">Humanoid Robot</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="language">Preferred Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            required
          >
            <option value="">Select...</option>
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="french">French</option>
            <option value="urdu">Urdu</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className={styles.authButton}>Sign Up</button>
      </form>
      {message && <p className={styles.successMessage}>{message}</p>}
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default SignUpForm;
