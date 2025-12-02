# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Implement the Physical AI & Humanoid Robotics AI-Native Textbook for the Panaversity Hackathon, covering all mandatory and bonus features to achieve a perfect score of 300/300 marks and secure an invitation to the core team.

## Technical Context

**Language/Version**: Python 3.11+, TypeScript
**Primary Dependencies**: FastAPI, Uvicorn, Qdrant Client, OpenAI ChatKit Python SDK, Pydantic, Docusaurus 3, Better-Auth
**Storage**: Neon Serverless Postgres, Qdrant Cloud (free tier)
**Testing**: pytest (backend), Playwright/Cypress (frontend E2E), Jest/React Testing Library (frontend unit)
**Target Platform**: Linux server (backend), Web (frontend)
**Project Type**: Web application (frontend + backend)
**Performance Goals**: Chatbot response < 2 seconds, page load < 3 seconds (p95)
**Constraints**: GitHub Pages (static frontend), Qdrant free tier limits, OpenAI API rate limits, time constraints for hackathon submission (30 Nov 2025).
**Scale/Scope**: 10 chapters, ~100 pages, multiple concurrent users for RAG/personalization, 5+ reusable subagents.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- ✅ **Official Textbook:** This will be the official textbook for upcoming Physical AI & Humanoid Robotics certification course.
- ✅ **AI-Generated Content:** 95%+ of the content will be generated and continuously improved by AI (Claude Code + Spec-Kit Plus + Subagents).
- ✅ **Dynamic & Alive:** Every chapter will feature an intelligent RAG chatbot capable of answering from the entire book OR from user-selected text.
- ✅ **Future of Education:** We are building the future of technical education: zero static books, fully personalized, translatable, interactive, and upgradable by AI agents.
- ✅ **Excellence & Opportunity:** Excellence in this hackathon can lead to joining the core team and potential startup founder role.
- ✅ **Docusaurus 3 Site with GitHub Pages Deployment:** Plan includes Docusaurus 3 for frontend and GitHub Pages for deployment.
- ✅ **Full Book in MDX with 10 Chapters:** Plan includes MDX for content and generation of 10 chapters.
- ✅ **Embedded RAG Chatbot using OpenAI ChatKit Python SDK:** Plan incorporates RAG chatbot with specified SDK.
- ✅ **Backend powered by FastAPI + Qdrant Cloud (free tier) + Neon Serverless Postgres:** Plan adheres to the specified backend technologies.
- ✅ **Selected-text-only answering capability:** This is a critical feature integrated into the RAG chatbot plan.
- ✅ **All content generated via Claude Code + Spec-Kit Plus:** The development process will leverage these tools for content generation.
- ✅ **Reusable Claude Code Subagents & Agent Skills (Minimum 5):** Plan includes tasks for developing 5+ subagents/skills.
- ✅ **Full Signup/Signin using Better-Auth:** Authentication will use Better-Auth, including user background questions.
- ✅ **Per-chapter “Personalize this chapter” button:** Plan includes functionality for content personalization.
- ✅ **Per-chapter “ترجمہ اردو میں دکھائیں” button:** Plan includes functionality for instant Urdu translation.
- ✅ **Frontend: Docusaurus 3 (classic template, TypeScript):** Plan aligns with the specified frontend tech stack.
- ✅ **Backend: FastAPI (Python 3.11+):** Plan aligns with the specified backend tech stack.
- ✅ **Vector DB: Qdrant Cloud (free tier):** Plan aligns with the specified vector database.
- ✅ **Postgres: Neon Serverless:** Plan aligns with the specified relational database.
- ✅ **Auth: Better-Auth:** Plan aligns with the specified authentication system.
- ✅ **Chatbot SDK: OpenAI ChatKit Python:** Plan aligns with the specified chatbot SDK.
- ✅ **Embeddings: text-embedding-3-large or a suitable free alternative:** Plan aligns with the specified embedding model.
- ✅ **Deployment: GitHub Pages (frontend), Render.com or Railway.app (backend):** Plan aligns with the specified deployment platforms.

## Project Structure

### Documentation (this feature)

```text
specs/main/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── models/
│   ├── services/
│   └── api/
├── tests/
└── skills/ # For Claude Code Subagents & Agent Skills

frontend/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── docs/ # For Docusaurus MDX content
├── tests/
└── docusaurus.config.js # Docusaurus configuration

```

**Structure Decision**: The project will adopt a clear separation between frontend and backend, residing in `frontend/` and `backend/` directories respectively, within the repository root. This aligns with the "Web application" structure and user requirements.


## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
