import React, { useState, useEffect, useRef, useCallback } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { queryRag } from '../api/ragService';
import styles from './Chatbot.module.css';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

// Ye component sirf browser mein load hoga
const Chatbot = () => {
  const {siteConfig} = useDocusaurusContext();
  const API_BASE_URL = siteConfig.customFields?.API_BASE_URL as string || "http://localhost:8000/api";

  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: 'Hello! Ask me anything about Physical AI & Humanoid Robotics.', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sirf browser mein mount karo
  useEffect(() => {
    setMounted(true);
  }, []);

  // Agar abhi browser nahi hai to kuch mat dikhao (SSR safe)
  if (!mounted) {
    return <div className={styles.chatbotContainer}>Loading chatbot...</div>;
  }

  const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  useEffect(scrollToBottom, [messages]);

  const handleTextSelection = useCallback(() => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      setSelectedText(selection.toString());
    } else {
      setSelectedText('');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('mouseup', handleTextSelection);
    return () => document.removeEventListener('mouseup', handleTextSelection);
  }, [handleTextSelection]);

  const handleSendMessage = async () => {
    const query = inputText.trim() || selectedText.trim();
    if (!query) return;

    setMessages(prev => [...prev, { text: query, sender: 'user' }]);
    setInputText('');
    setSelectedText('');
    setIsLoading(true);

    try {
      const response = await queryRag({ query, context: selectedText }, API_BASE_URL);
      setMessages(prev => [...prev, { text: response.answer || 'Thinking...', sender: 'bot' }]);
    } catch {
      setMessages(prev => [...prev, { text: 'Demo mode: I am thinking...', sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((m, i) => (
          <div key={i} className={`${styles.message} ${styles[m.sender]}`}>
            {m.text}
          </div>
        ))}
        {isLoading && <div className={styles.message}>Thinking...</div>}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputContainer}>
        <input
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && handleSendMessage()}
          placeholder={selectedText ? `Selected: "${selectedText.substring(0,30)}..."` : "Ask a question..."}
          className={styles.inputField}
          disabled={isLoading}
        />
        <button onClick={handleSendMessage} disabled={isLoading} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;