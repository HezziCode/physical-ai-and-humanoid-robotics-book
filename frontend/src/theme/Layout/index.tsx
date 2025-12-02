import React, { useState, useEffect } from 'react';
import Layout from '@theme-original/Layout';
import Chatbot from '@site/src/components/Chatbot';
import SignUpForm from '@site/src/components/SignUpForm';
import SignInForm from '@site/src/components/SignInForm';
import styles from './AuthModal.module.css'; // We will create this CSS module next

export default function LayoutWrapper(props) {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
    const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUserToken(localStorage.getItem('accessToken'));
    }
  }, []);

  const handleSignInSuccess = (token: string) => {
    localStorage.setItem('accessToken', token);
    setUserToken(token);
    setShowAuthModal(false);
  };

  const handleSignOut = () => {
    localStorage.removeItem('accessToken');
    setUserToken(null);
  };

  return (
    <>
      <Layout {...props} />
      <Chatbot />

      <div className={styles.authControls}>
        {userToken ? (
          <button onClick={handleSignOut}>Sign Out</button>
        ) : (
          <button onClick={() => setShowAuthModal(true)}>Sign In / Sign Up</button>
        )}
      </div>

      {showAuthModal && (
        <div className={styles.modalOverlay} onClick={() => setShowAuthModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={() => setShowAuthModal(false)}>&times;</button>
            <div className={styles.authToggle}>
              <button
                className={`${styles.toggleButton} ${isSignUp ? styles.active : ''}`}
                onClick={() => setIsSignUp(true)}
              >
                Sign Up
              </button>
              <button
                className={`${styles.toggleButton} ${!isSignUp ? styles.active : ''}`}
                onClick={() => setIsSignUp(false)}
              >
                Sign In
              </button>
            </div>
            {isSignUp ? (
              <SignUpForm />
            ) : (
              <SignInForm onSignInSuccess={handleSignInSuccess} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
