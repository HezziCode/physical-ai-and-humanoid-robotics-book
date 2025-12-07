import React from 'react';
import Layout from '@theme-original/Layout';
import Chatbot from '@site/src/components/Chatbot/Chatbot';

export default function LayoutWrapper(props) {
  return (
    <Layout {...props}>
      {props.children}
      <Chatbot />
    </Layout>
  );
}