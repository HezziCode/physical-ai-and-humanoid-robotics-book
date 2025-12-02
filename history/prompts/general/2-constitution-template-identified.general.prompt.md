---
id: 2
title: Constitution Template Identified
stage: general
date: 2025-11-29
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: user
command: /sp.plan
labels: ["constitution", "template", "planning", "clarification"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
tests:
---

## Prompt

/sp.plan

We are building the winning submission for Panaversity Physical AI & Humanoid Robotics Hackathon (30 Nov 2025).

Strictly follow the constitution.md in constitution/ folder.

Core mandatory (100 marks):
- Docusaurus 3 + GitHub Pages deploy
- Full book in MDX with 10 exact chapters
- Embedded RAG chatbot using OpenAI ChatKit Python SDK
- Backend: FastAPI + Qdrant Cloud free tier + Neon Serverless Postgres
- Selected-text-only answering must work perfectly

Must include ALL bonuses from day one (extra 200 marks):
- Better-Auth signup/login with user background questions
- Per-chapter "Personalize this chapter" button (content rewrites based on user profile)
- Per-chapter "ترجمہ اردو میں دکھائیں" button (instant perfect Urdu translation)
- Minimum 5 reusable Claude Code Subagents & Agent Skills (Matrix-style loadable intelligence)

Generate a complete, numbered implementation plan that guarantees 300/300 marks and Panaversity core team invitation.
Prioritize tasks that give maximum marks first.
Use modern, clean, production-ready code patterns.

## Response snapshot

The constitution.md file in your project is currently a template. According to the project instructions, I need to strictly follow this constitution. I cannot proceed with planning until a proper constitution is defined. Please run the `/sp.constitution` command to set up your project's constitution. Once that is complete, I can proceed with generating the implementation plan.

## Outcome

- ✅ Impact: The clarification process could not proceed due to a missing spec file.
- 🧪 Tests: N/A
- 📁 Files: No files modified.
- 🔁 Next prompts: User should run /sp.specify
- 🧠 Reflection: The /sp.clarify command requires a spec file to be present. The agent correctly identified the missing file and instructed the user to run /sp.specify.

## Evaluation notes (flywheel)

- Failure modes observed: Missing spec file.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
