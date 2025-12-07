---

description: "Task list for Physical AI Book – Final RAG Chatbot with OpenAI Agents SDK implementation"
---

# Tasks: Physical AI Book – Final RAG Chatbot with OpenAI Agents SDK

**Input**: Design documents from `/specs/main/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Web app**: `backend/src/`, `frontend/src/`
- Paths shown below assume single project - adjust based on plan.md structure

---

## Phase 1: Foundational Tasks

These tasks are prerequisites for the core functionality.

- [X] T001 Upgrade backend/main.py: Update `/rag/query` endpoint to use `rag_query` function from `backend/agent.py`.
    - Files: `backend/main.py`
- [X] T002 Fix frontend to send correct JSON: In the Chatbot parent component, modify message sending to send `{ query: input, context: selectedText }` to `http://localhost:8000/rag/query` and show the answer in messages.
    - Files: `frontend/src/components/Chatbot/Chatbot.tsx` (assuming a main Chatbot component) or relevant parent component within `frontend/src/components/Chatbot/` that handles sending messages.
- [X] T003 Make sure FloatingChatButton + ChatWindow are rendered in Layout: Add `import Chatbot from '@site/src/components/chatbot/Chatbot';` and render `<Chatbot />` within `<Layout {...props} />`.
    - Files: `frontend/src/theme/Layout/index.tsx`

## Phase 2: Verification

- [X] T004 Start backend server in background: Run `uvicorn backend.main:app --reload --port 8000`.
    - Command: `uvicorn backend.main:app --reload --port 8000`
- [ ] T005 Test: Selected text queries should answer from context only.
- [ ] T006 Test: Normal questions should search the full book via `qdrant_search_tool` in `backend/agent.py`.

## Dependencies
- T001, T002, T003 must be completed before T004.
- T004 must be completed before T005 and T006.

## Parallel Execution Examples
- T001, T002, T003 can be worked on in parallel.

## Implementation Strategy
- Implement the changes incrementally, focusing on one task at a time and verifying its completion.
- Prioritize backend changes before frontend adjustments.
