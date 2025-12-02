import React, { useState, useRef, useEffect, useCallback } from 'react';
import { queryRag } from '../api/ragService';
import styles from './Chatbot.module.css';

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>(
    [{ text: 'Hello! Ask me anything about Physical AI & Humanoid Robotics.', sender: 'bot' }]
  );
  const [inputText, setInputText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
    return () => {
      document.removeEventListener('mouseup', handleTextSelection);
    };
  }, [handleTextSelection]);

  const handleSendMessage = async () => {
    const messageToSend = inputText.trim();
    const contextToSend = selectedText.trim();

    if (!messageToSend && !contextToSend) return;

    const userMessage = contextToSend
      ? `Question: "${messageToSend}" (Context: "${contextToSend}")`
      : messageToSend;

    setMessages((prevMessages) => [...prevMessages, { text: userMessage, sender: 'user' }]);
    setInputText('');
    setSelectedText('');
    setIsLoading(true);

    try {
      const response = await queryRag({ query: messageToSend, context: contextToSend });
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response.answer, sender: 'bot' },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: 'Error: Unable to get a response. Please try again.', sender: 'bot' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <div key={index} className={`${styles.message} ${styles[message.sender]}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder={selectedText ? `Ask about selected text: "${selectedText.substring(0, 30)}..."` : "Ask a question..."}
          className={styles.inputField}
          disabled={isLoading}
        />
        <button onClick={handleSendMessage} className={styles.sendButton} disabled={isLoading}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
