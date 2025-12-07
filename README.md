# Physical AI & Humanoid Robotics Book

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python](https://img.shields.io/badge/python-3.14%2B-blue)](https://www.python.org/downloads/)
[![Docusaurus](https://img.shields.io/badge/Docusaurus-3.9.2-blue)](https://docusaurus.io/)

## Overview

This project hosts the "Physical AI & Humanoid Robotics" book, an AI-native textbook that combines advanced robotics with artificial intelligence to create next-generation humanoid robots. The book is built using Docusaurus and features an intelligent RAG (Retrieval Augmented Generation) chatbot for interactive learning.

## Features

- 🤖 **AI-Powered Chatbot**: Integrated RAG chatbot for Q&A on book content
- 📚 **Interactive Learning**: Dynamic content with AI-generated explanations
- 🌙 **Dark/Light Mode**: Automatic theme switching based on system preferences
- 📱 **Responsive Design**: Mobile-friendly layout for all devices
- 🌍 **Multi-language Support**: Available in English and Urdu
- 🔍 **Searchable Content**: Full-text search across all chapters
- 📖 **AI-Native Content**: 95%+ of content generated and continuously improved by AI

## Technology Stack

### Frontend
- **Framework**: Docusaurus v3.9.2
- **Language**: TypeScript/JavaScript
- **Styling**: CSS Modules, Custom CSS
- **UI Components**: React-based components

### Backend
- **Framework**: FastAPI
- **Language**: Python 3.14+
- **AI Integration**: OpenAI Agents SDK
- **Database**: PostgreSQL (NeonDB)
- **Vector Store**: Qdrant for RAG functionality

### AI & ML
- **Models**: OpenAI GPT-based models
- **RAG System**: Retrieval Augmented Generation for contextual responses
- **Agent Framework**: Custom AI agents for book interaction

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend        │    │   AI Services   │
│   (Docusaurus)  │◄──►│   (FastAPI)      │◄──►│   (OpenAI)      │
│                 │    │                  │    │                 │
│ • Chat Interface│    │ • RAG Query      │    │ • Embeddings    │
│ • Book Content  │    │ • Agent Runner   │    │ • Completions   │
│ • Responsive UI │    │ • Qdrant Search  │    │ • Context       │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## Installation

### Prerequisites
- Node.js 18+
- Python 3.14+
- Git
- Access to OpenAI API (or compatible endpoint)

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book.git
cd physical-ai-and-humanoid-robotics-book
```

2. **Install frontend dependencies**
```bash
cd frontend
npm install
```

3. **Install backend dependencies**
```bash
cd ../backend
pip install -e .
```

4. **Set up environment variables**
```bash
# Copy the environment template
cp backend/.env.example backend/.env
# Edit the .env file with your API keys
```

5. **Configure environment variables**
```env
# Backend Configuration
OPENAI_API_KEY=your_openai_api_key
GEMINI_API_KEY=your_gemini_api_key  # For OpenAI-compatible endpoint
NEON_DATABASE_URL=your_postgresql_url
QDRANT_URL=your_qdrant_url
QDRANT_API_KEY=your_qdrant_api_key

# Frontend Configuration (if needed)
GITHUB_TOKEN=your_github_token  # For edit links
```

## Usage

### Running the Development Server

1. **Start the backend server**
```bash
cd backend
uvicorn main:app --reload --port 8000
```

2. **Start the frontend server**
```bash
cd frontend
npm start
```

3. **Access the application**
- Frontend: http://localhost:3000/physical-ai-and-humanoid-robotics-book/
- Backend API: http://localhost:8000

### Using the Chatbot

The integrated chatbot allows you to:
- Ask questions about book content
- Get contextual answers based on selected text
- Receive AI-generated explanations
- Interact with the RAG system for accurate responses

## Project Structure

```
hackathon-book/
├── backend/                 # FastAPI backend
│   ├── main.py             # API endpoints
│   ├── agent.py            # AI agent configuration
│   ├── agentconfig.py      # Agent settings
│   ├── qdrant_search_tool.py # RAG search functionality
│   └── .env               # Environment variables
├── frontend/               # Docusaurus frontend
│   ├── docs/              # Book content
│   │   └── chapters/      # Individual chapters
│   ├── src/
│   │   └── components/    # React components
│   │       └── Chatbot/   # Chatbot implementation
│   ├── docusaurus.config.ts # Docusaurus configuration
│   └── sidebars.ts        # Navigation structure
├── .gitignore             # Git ignore rules
├── README.md              # This file
└── package.json           # Frontend dependencies
```

## API Endpoints

### Backend API (http://localhost:8000)

- `GET /` - Health check and welcome message
- `POST /rag/query` - RAG query endpoint for chatbot
- `POST /auth/signup` - User registration
- `POST /auth/token` - User authentication

### Request Format for RAG Query
```json
{
  "query": "Your question here",
  "context": "Optional context from selected text"
}
```

### Response Format
```json
{
  "answer": "AI-generated response based on context"
}
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## Deployment

### GitHub Pages Deployment
The site is configured for GitHub Pages deployment at:
`https://HezziCode.github.io/physical-ai-and-humanoid-robotics-book/`

### Build Commands
```bash
# Build the frontend
cd frontend
npm run build

# The built site will be in the `build` directory
```

## Security Considerations

- Never commit API keys or sensitive data to version control
- Use environment variables for all sensitive information
- The `.env` file is already in `.gitignore`
- Implement proper authentication for production use
- Use HTTPS in production environments

## Performance

- The site uses Docusaurus' built-in optimizations
- Code splitting for faster initial loads
- Progressive image loading
- Client-side routing for smooth navigation
- Optimized bundle sizes

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/HezziCode/physical-ai-and-humanoid-robotics-book/issues) page
2. Create a new issue with detailed information
3. Provide your environment details and steps to reproduce

## Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Powered by AI technologies
- Inspired by the future of Physical AI and Humanoid Robotics
- Created by the HezziCode team

---

**Note**: This project is part of the AI-Robotics Era initiative to make advanced robotics education accessible through AI-native learning materials.