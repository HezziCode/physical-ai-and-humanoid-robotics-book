
import React from 'react';
import DocItem from '@theme-original/DocItem';

function TranslationButton() {
  const handleClick = () => {
    alert('Translate to Urdu clicked!');
    // Placeholder for actual Urdu translation logic
  };
  return (
    <button style={{
        backgroundColor: '#1877F2', /* Facebook blue */
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginRight: '10px',
        fontSize: '14px'
      }} onClick={handleClick}>
      Show translation in Urdu
    </button>
  );
}

function PersonalizationButton() {
  const handleClick = () => {
    alert('Personalize this chapter clicked!');
    // Placeholder for actual personalization logic
  };
  return (
    <button style={{
        backgroundColor: '#FF5722', /* Orange */
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '14px'
      }} onClick={handleClick}>
      Personalize this chapter
    </button>
  );
}

export default function DocItemWrapper(props) {
  return (
    <>
      <div style={{ marginBottom: '20px' }}>
        <TranslationButton />
        <PersonalizationButton />
      </div>
      <DocItem {...props} />
    </>
  );
}
