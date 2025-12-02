# Feature: Physical AI & Humanoid Robotics Textbook

## User Story 1: Create Landing Page
- Goal: A beautiful landing page with course overview and call to action.
- Test Criteria:
  - Landing page is accessible at the root URL.
  - Contains hero section, subtitle, cover image.
  - Displays three topic cards (ROS 2, NVIDIA Isaac, VLA).
  - Includes course overview and hardware requirements.
  - "Start Learning" button links to Chapter 1.

### Tasks
- [X] T001 [US1] Create landing page content in frontend/docs/intro.mdx

## User Story 2: Create 10 MDX Chapters
- Goal: Exactly 10 detailed MDX chapters for the textbook.
- Test Criteria:
  - 10 chapters (chapter-1.mdx to chapter-10.mdx) exist in frontend/docs/chapters/.
  - Each chapter has proper front matter (id, sidebar_label, sidebar_position).
  - Each chapter contains at least 3-5 subheadings.
  - Each chapter includes Python/ROS 2 code blocks and Mermaid diagrams.
  - Each chapter includes images (placeholders) and Admonitions.
  - Each chapter ends with a "Next Chapter →" link (except the last one).

### Tasks
- [X] T002 [US2] Create Chapter 1 MDX in frontend/docs/chapters/chapter-1.mdx
- [X] T003 [US2] Create Chapter 2 MDX in frontend/docs/chapters/chapter-2.mdx
- [X] T004 [US2] Create Chapter 3 MDX in frontend/docs/chapters/chapter-3.mdx
- [X] T005 [US2] Create Chapter 4 MDX in frontend/docs/chapters/chapter-4.mdx
- [X] T006 [US2] Create Chapter 5 MDX in frontend/docs/chapters/chapter-5.mdx
- [X] T007 [US2] Create Chapter 6 MDX in frontend/docs/chapters/chapter-6.mdx
- [X] T008 [US2] Create Chapter 7 MDX in frontend/docs/chapters/chapter-7.mdx
- [X] T009 [US2] Create Chapter 8 MDX in frontend/docs/chapters/chapter-8.mdx
- [X] T010 [US2] Create Chapter 9 MDX in frontend/docs/chapters/chapter-9.mdx
- [X] T011 [US2] Create Chapter 10 MDX in frontend/docs/chapters/chapter-10.mdx

## User Story 3: Configure Sidebar and Resolve Frontend Display Issues
- Goal: Properly configured sidebar, and a fully functional and visible frontend.
- Test Criteria:
  - Sidebar correctly displays "Welcome" (intro) and "Chapters" with all 10 chapters in order.
  - No Docusaurus server compilation errors.
  - Frontend is accessible and rendered correctly in the browser.

### Tasks
- [X] T012 Update frontend/sidebars.ts to include 'intro' and 'chapters/chapter-X' IDs
- [X] T013 Install `@fortawesome/react-fontawesome` and `@fortawesome/free-solid-svg-icons`
- [X] T014 Fix `process is not defined` error in frontend/src/components/SignUpForm.tsx
- [ ] T015 Debug Docusaurus blank page / client-side rendering issues.
- [ ] T016 Ensure correct access to the Docusaurus server on the correct port and base URL (http://localhost:3001/hackathon-book/)

## Dependencies
- User Story 1 (Landing Page) must be completed before User Story 3 (Sidebar Configuration).
- User Story 2 (MDX Chapters) must be completed before User Story 3 (Sidebar Configuration).

## Parallel Execution
- Tasks within User Story 2 (creating individual chapters) can be executed in parallel.

## Implementation Strategy
- Focus on completing User Story 3, as it is currently blocking the frontend display.
- Debug client-side rendering issues after confirming correct server access.
