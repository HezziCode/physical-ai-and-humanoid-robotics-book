import React from 'react';
import clsx from 'clsx';
import styles from './FloatingChatButton.module.css';
import { TbMessageChatbotFilled } from "react-icons/tb";

interface FloatingChatButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const FloatingChatButton: React.FC<FloatingChatButtonProps> = ({ onClick, isOpen }) => {
  return (
    <button
      className={clsx(styles.floatingButton, { [styles.hidden]: isOpen })}
      onClick={onClick}
      aria-label="Open chat"
    >
    <TbMessageChatbotFilled />
    </button>
  );
};

export default FloatingChatButton;
