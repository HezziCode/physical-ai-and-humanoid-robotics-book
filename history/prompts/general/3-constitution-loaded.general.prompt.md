---
id: 3
title: Constitution Loaded
stage: general
date: 2025-11-29
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: user
command: /sp.constitution
labels: ["constitution", "setup"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
tests:
---

## Prompt

/sp.constitution

My final constitution.md already exists in the root folder (constitution/constitution.md) and it is perfect.

Please do NOT create a new one.

Just copy the existing constitution.md file exactly as it is and place it in the correct Spec-Kit Plus location (.specify/memory/constitution.md) so that /sp.plan, /sp.tasks and /sp.implement can proceed without any error.

After copying, confirm with: "Constitution loaded successfully from existing file."

## Response snapshot

Constitution loaded successfully from existing file.

## Outcome

- ✅ Impact: The project constitution has been successfully loaded from an existing file to the Spec-Kit Plus location.
- 🧪 Tests: N/A
- 📁 Files: .specify/memory/constitution.md updated.
- 🔁 Next prompts: User can now proceed with /sp.plan.
- 🧠 Reflection: The agent successfully handled the user's request to copy an existing constitution file and confirmed its completion.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script failed to execute, requiring manual PHR creation.
- Graders run and results (PASS/FAIL): N/A
- Prompt variant (if applicable): N/A
- Next experiment (smallest change to try): N/A
