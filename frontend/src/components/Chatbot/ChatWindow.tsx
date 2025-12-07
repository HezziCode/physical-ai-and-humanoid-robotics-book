import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import styles from './ChatWindow.module.css';

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
  onSendMessage: (message: string, context?: string) => void;
  messages: Array<{ text: string; sender: 'user' | 'bot' }>;
  isLoading: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  isOpen,
  onClose,
  onSendMessage,
  messages,
  isLoading,
}) => {
  const [inputValue, setInputValue] = useState('');
  const messageAreaRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messageAreaRef.current) {
      messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatWindowRef.current && !chatWindowRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div ref={chatWindowRef} className={styles.chatWindow}>
      <div className={styles.chatHeader}>
        <h3>AI Assistant</h3>
        <button onClick={onClose} className={styles.closeButton} aria-label="Close chat">
          ×
        </button>
      </div>
      <div ref={messageAreaRef} className={styles.messageArea}>
        {messages.map((msg, index) => (
          <div key={index} className={clsx(styles.message, styles[msg.sender])}>
            {msg.text}
          </div>
        ))}
        {isLoading && (
          <div className={clsx(styles.message, styles.bot)}>
            Thinking...
          </div>
        )}
      </div>
      <div className={styles.chatInputContainer}>
        <input
          type="text"
          className={styles.chatInput}
          placeholder="Ask a question..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSendMessage} className={styles.sendButton}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
