---
id: 008
title: Fix Docusaurus Urdu 404
stage: general
date: 2025-12-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: none
branch: main
user: unknown
command: /sp.phr
labels: ["Docusaurus", "i18n", "Urdu", "404", "routing", "translation"]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-1.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-2.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-3.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-4.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-5.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-6.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-7.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-8.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-9.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/chapter-10.mdx
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/
  - frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/
tests:
  - none
---

## Prompt

/sp.phr --title "Fix Docusaurus Urdu 404" --stage general --feature "none" --json

## Response snapshot

Identified and resolved a 404 'Page Not Found' error for Urdu translations in Docusaurus by correcting the file path of Urdu chapter MDX files to include the 'current' subdirectory, which is expected by Docusaurus for unversioned translated content.

## Outcome

- ✅ Impact: Successfully moved Urdu chapter translation files to the correct Docusaurus i18n directory, resolving the 404 routing error for Urdu content.
- 🧪 Tests: Manual testing by the user (pending).
- 📁 Files: Created `frontend/i18n/ur/docusaurus-plugin-content-docs/current/chapters/` and moved 10 Urdu chapter MDX files into it. Removed the old `frontend/i18n/ur/docusaurus-plugin-content-docs/chapters/` directory.
- 🔁 Next prompts: User to rebuild Docusaurus site and retest Urdu links.
- 🧠 Reflection: The absence of a 'current' subdirectory for unversioned i18n docs can lead to unexpected 404 errors, even if translated content exists. Proactively verify Docusaurus i18n directory structure.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script was not found, requiring a fallback to agent-native file creation.
- Graders run and results (PASS/FAIL): unspecified
- Prompt variant (if applicable): unspecified
- Next experiment (smallest change to try): Ensure `create-phr.sh` script is available and executable in the environment, or improve error handling to provide more specific instructions for manual PHR creation fallback.
