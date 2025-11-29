---
id: 0001
title: Establish Panaversity Physical AI & Humanoid Robotics Hackathon Constitution
stage: constitution
date: 2025-11-29
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: master
user: user
command: /sp.constitution
labels: ["constitution","hackathon","Panaversity","Physical AI","Humanoid Robotics","textbook"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - constitution/constitution.md
tests:
  null
---

## Prompt

You are now establishing the Constitution for a winning submission in the Panaversity Physical AI & Humanoid Robotics Hackathon (30 Nov 2025).

Project Name: Physical AI & Humanoid Robotics – An AI-Native Textbook
Deployed as a Docusaurus 3 site on GitHub Pages with fully embedded RAG chatbot and multiple bonus features.

Core Vision & Principles
1. This is the official textbook for Panaversity’s upcoming Physical AI & Humanoid Robotics certification course.
2. 95%+ of the content will be generated and continuously improved by AI (Claude Code + Spec-Kit Plus + Subagents).
3. The book must feel alive: every chapter has an intelligent RAG chatbot that can answer from whole book OR only from user-selected text.
4. We are building the future of technical education: zero static books, fully personalized, translatable, interactive, and upgradable by AI agents.
5. Excellence in this hackathon can lead to joining Panaversity core team and potential startup founder role.

Mandatory Deliverables (100 points)
- Docusaurus 3 site deployed on GitHub Pages
- Entire book written in MDX
- RAG chatbot embedded on every page using OpenAI ChatKit Python SDK
- Backend: FastAPI + Qdrant Cloud (free tier) + Neon Serverless Postgres
- Selected-text-only answering capability (critical judging criteria)
- All content generated via Claude Code + Spec-Kit Plus

Bonus Goals (up to +200 points, we aim to get all)
1. Reusable Claude Code Subagents & Agent Skills (Matrix-style loadable intelligence)
2. Full Signup/Signin using Better-Auth[](https://www.better-auth.com/)
   - At signup ask user: years of coding experience, AI knowledge level, hardware access (Jetson/RTX), preferred language
3. Per-chapter “Personalize this chapter” button → rewrites content according to user background
4. Per-chapter “ترجمہ اردو میں دکھائیں” button → instant Urdu translation with perfect technical terms

Tech Stack (non-negotiable)
Frontend: Docusaurus 3 (classic template, TypeScript)
Backend: FastAPI (Python 3.11+)
Vector DB: Qdrant Cloud free tier
Postgres: Neon Serverless
Auth: Better-Auth
Chatbot SDK: OpenAI ChatKit Python
Embeddings: text-embedding-3-large or free alternative
Deployment: GitHub Pages (frontend), Render.com or Railway.app (backend)

Book Chapters (exact list, do not change order)
1. Introduction to Physical AI and Embodied Intelligence
2. The Robotic Nervous System – ROS 2 Deep Dive
3. Digital Twins – Gazebo, Unity and Physics Simulation
4. NVIDIA Isaac Platform – Isaac Sim & Isaac ROS
5. Vision-Language-Action (VLA) Models
6. Bipedal Locomotion and Balance Control
7. Manipulation and Dexterous Hands
8. Conversational Robotics – Voice to Action
9. Hardware Requirements and Lab Setup Guide (2025–2026)
10. Capstone Project – Autonomous Humanoid with Natural Language Control

Tone & Style
- Professional yet exciting
- Written for intermediate–advanced AI engineers who want to enter robotics
- Heavy use of diagrams, code snippets, warning boxes, expandable sections
- Urdu translation must preserve technical accuracy (use correct terms like رobotikس, روز ٹو, ایسیک سم etc.)

Success Metrics
- Live deployed book before 6 PM, 30 Nov 2025
- Under 90-second demo video showing: selected-text RAG, personalization, Urdu button, auth flow
- At least 5 reusable Subagents/Skills created
- Zero broken links, fully working chatbot on mobile + desktop

Now generate a complete constitution.md file inside a folder called constitution/ with the above principles, rules, vision, chapter list, tech stack, bonus strategy and success criteria. Make it beautiful, well-structured and inspiring so the entire AI team follows it religiously.

## Response snapshot

Created the `constitution/constitution.md` file based on the provided project details, outlining the vision, principles, deliverables, tech stack, chapters, and success metrics for the Panaversity Physical AI & Humanoid Robotics Hackathon.

## Outcome

- ✅ Impact: The constitution file for the hackathon project has been successfully established.
- 🧪 Tests: null
- 📁 Files: The `constitution/constitution.md` file was created.
- 🔁 Next prompts: The user can now proceed with further project development based on the constitution.
- 🧠 Reflection: The PHR captures the details of the constitution generation, ensuring traceability and documentation of the project's foundational principles.

## Evaluation notes (flywheel)

- Failure modes observed: null
- Graders run and results (PASS/FAIL): null
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null
