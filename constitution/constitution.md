# Physical AI & Humanoid Robotics Book Hackathon Constitution

## Project Name
Physical AI & Humanoid Robotics – An AI-Native Textbook

## Core Vision & Principles
1.  **Official Textbook:** This will be the official textbook for upcoming Physical AI & Humanoid Robotics certification course.
2.  **AI-Generated Content:** 95%+ of the content will be generated and continuously improved by AI (Claude Code + Spec-Kit Plus + Subagents).
3.  **Dynamic & Alive:** Every chapter will feature an intelligent RAG chatbot capable of answering from the entire book OR from user-selected text.
4.  **Future of Education:** We are building the future of technical education: zero static books, fully personalized, translatable, interactive, and upgradable by AI agents.
5.  **Excellence & Opportunity:** Excellence in this hackathon can lead to joining the core team and potential startup founder role.

## Mandatory Deliverables (100 points)
*   Docusaurus 3 site deployed on GitHub Pages
*   Entire book content written in MDX format
*   RAG chatbot embedded on every page using OpenAI ChatKit Python SDK
*   Backend powered by FastAPI + Qdrant Cloud (free tier) + Neon Serverless Postgres
*   **Selected-text-only answering capability** (critical judging criteria)
*   All content generated via Claude Code + Spec-Kit Plus

## Bonus Goals (up to +200 points)
1.  **Reusable Claude Code Subagents & Agent Skills:** Implement "Matrix-style loadable intelligence" with multiple reusable subagents and agent skills.
2.  **Full Signup/Signin using Better-Auth:**
    *   During signup, capture user data: years of coding experience, AI knowledge level, hardware access (Jetson/RTX), preferred language.
3.  **Per-chapter “Personalize this chapter” button:** Rewrites content according to user background and preferences.
4.  **Per-chapter “ترجمہ اردو میں دکھائیں” button:** Provides instant Urdu translation with perfect technical terms.

## Tech Stack (Non-Negotiable)
*   **Frontend:** Docusaurus 3 (classic template, TypeScript)
*   **Backend:** FastAPI (Python 3.11+)
*   **Vector DB:** Qdrant Cloud (free tier)
*   **Postgres:** Neon Serverless
*   **Auth:** Better-Auth
*   **Chatbot SDK:** OpenAI ChatKit Python
*   **Embeddings:** text-embedding-3-large or a suitable free alternative
*   **Deployment:** GitHub Pages (frontend), Render.com or Railway.app (backend)

## Book Chapters (Exact List, Do Not Change Order)
1.  Introduction to Physical AI and Embodied Intelligence
2.  The Robotic Nervous System – ROS 2 Deep Dive
3.  Digital Twins – Gazebo, Unity and Physics Simulation
4.  NVIDIA Isaac Platform – Isaac Sim & Isaac ROS
5.  Vision-Language-Action (VLA) Models
6.  Bipedal Locomotion and Balance Control
7.  Manipulation and Dexterous Hands
8.  Conversational Robotics – Voice to Action
9.  Hardware Requirements and Lab Setup Guide (2025–2026)
10. Capstone Project – Autonomous Humanoid with Natural Language Control

## Tone & Style
*   **Professional yet exciting:** Engaging for a technical audience.
*   **Target Audience:** Intermediate–advanced AI engineers aspiring to enter robotics.
*   **Content Richness:** Heavy use of diagrams, code snippets, warning boxes, and expandable sections.
*   **Urdu Translation:** Must preserve technical accuracy, using correct terms (e.g., رobotikس, روز ٹو, ایسیک سم).

## Success Metrics
*   **Deployment:** Live deployed book before 6 PM, 30 Nov 2025.
*   **Demo Video:** Under 90-second demo video showcasing selected-text RAG, personalization, Urdu button, and auth flow.
*   **Subagents/Skills:** At least 5 reusable Subagents/Skills created.
*   **Quality Assurance:** Zero broken links, fully working chatbot on both mobile and desktop.
- Minimum 5 reusable Subagents/Skills (examples: ROS2-Expert, URDF-Generator, Urdu-Translator, Hardware-Advisor, VLA-Explainer)