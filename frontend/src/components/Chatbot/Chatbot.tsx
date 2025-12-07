import React, { useState, useCallback } from 'react';
import FloatingChatButton from './FloatingChatButton';
import ChatWindow from './ChatWindow';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChatButtonClick = useCallback(() => {
    setIsChatOpen((prev) => !prev);
  }, []);

  const handleChatClose = useCallback(() => {
    setIsChatOpen(false);
  }, []);

  const handleSendMessage = useCallback(async (message: string, context?: string) => {
    const newMessage: Message = { text: message, sender: 'user' };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/rag/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: message,
          context: context || ""
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setMessages((prevMessages) => [...prevMessages, { text: data.answer, sender: 'bot' }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages((prevMessages) => [...prevMessages, { text: 'Chatbot is in demo mode', sender: 'bot' }]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <FloatingChatButton onClick={handleChatButtonClick} isOpen={isChatOpen} />
      <ChatWindow
        isOpen={isChatOpen}
        onClose={handleChatClose}
        onSendMessage={handleSendMessage}
        messages={messages}
        isLoading={isLoading}
      />
    </>
  );
}
