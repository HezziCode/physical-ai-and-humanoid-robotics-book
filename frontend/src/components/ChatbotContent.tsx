import React, { useState, useRef, useEffect, useCallback } from 'react';
import { queryRag } from '../api/ragService';
import styles from './Chatbot.module.css';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatbotContent() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: 'Hello! Ask me anything about Physical AI & Humanoid Robotics.', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
    document.addEventListener('touchend', handleTextSelection);
    return () => {
      document.removeEventListener('mouseup', handleTextSelection);
      document.removeEventListener('touchend', handleTextSelection);
    };
  }, [handleTextSelection]);

  const handleSendMessage = async () => {
    const messageToSend = inputText.trim() || selectedText.trim();
    if (!messageToSend) return;

    setMessages(prev => [...prev, { text: messageToSend, sender: 'user' }]);
    setInputText('');
    setSelectedText('');
    setIsLoading(true);

    try {
      const response = await queryRag({ query: messageToSend, context: selectedText });
      setMessages(prev => [...prev, { text: response.answer || 'Thinking...', sender: 'bot' }]);
    } catch {
      setMessages(prev => [...prev, { text: 'Sorry, I am offline in demo mode.', sender: 'bot' }]);
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
          placeholder={selectedText ? "Ask about selected text..." : "Type a question..."}
          className={styles.inputField}
          disabled={isLoading}
        />
        <button onClick={handleSendMessage} disabled={isLoading} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
}