# EasyToLearn

A free, fully static educational website for learning cybersecurity-adjacent
technical topics. Uses animations, plain-English explanations, and quizzes
to make technical content accessible to absolute beginners.

**Hosted free on GitHub Pages — zero cost, no backend, no domain needed.**

## What's included — 3 complete tracks, 107 topics

### 🧱 Foundation — 36 topics, 12 sections
How computers work, hardware vs software, binary, operating systems,
the internet, the web, encryption basics, programming concepts,
networks, security fundamentals, databases, cloud, and modern tech.
**Start here if you're brand new to tech.**

### 🌐 Networking — 35 topics, 9 sections
Fundamentals, OSI & TCP/IP models, addressing, core protocols,
hardware, routing & switching, wireless, security basics, advanced topics.

### 🐧 Linux Mastery — 36 topics, 9 sections
Fundamentals, file management, permissions, processes, shell tools,
package management, networking on Linux, scripting, system administration.

Every topic has:
- An interactive click-to-step animation (topic-specific, zero duplicates)
- Basic / Intermediate / Advanced explanation tabs
- A 3-question quiz with instant feedback
- **Completion tracking** — finishing the quiz marks the topic complete with
  a green ✓ badge that persists in localStorage across sessions

## File structure

```
easytolearn/
├── index.html                 ← Homepage with 3 track cards + stats bar
├── foundation.html            ← Foundation topic list with progress bar
├── networking.html            ← Networking topic list with progress bar
├── linux.html                 ← Linux topic list with progress bar
├── topic.html                 ← ONE shared template for all 107 topics
├── css/style.css              ← Full design system
├── js/
│   ├── topics-data.js         ← 35 Networking topics
│   ├── linux-topics-data.js   ← 36 Linux topics
│   ├── foundation-topics-data.js ← 36 Foundation topics
│   ├── animations.js          ← 9 parameterized animation engines
│   └── quiz.js                ← Quiz engine with completion callback
└── README.md
```

## How completion tracking works

When a user answers all questions in a topic's quiz (any answers — correct
or not), `quiz.js` fires an `onComplete` callback. `topic.html` catches
this and:
1. Calls `markComplete(topicId)` which saves the topic id to `localStorage`
   under a track-specific key (`etl_completed_networking`, etc.)
2. Shows a green "✓ Completed" badge next to the topic title
3. Reveals a celebration banner with a smooth scroll-into-view

On the track list pages (networking.html, linux.html, foundation.html):
- Each completed topic shows a filled ✓ badge instead of its difficulty label
- A progress bar at the top shows X / total completed for that track

Progress persists across browser sessions via localStorage. Users can clear
it by clearing browser data.

## How to deploy free on GitHub Pages

1. Create a new GitHub repository (e.g. `easytolearn`)
2. Upload ALL files keeping the folder structure exactly as-is
3. Go to **Settings → Pages → Deploy from branch → main / (root)**
4. Save — your site is live at `https://YOUR-USERNAME.github.io/easytolearn/`

## How to add topics or a new track

**Add a topic:** add one object to the relevant `js/*-topics-data.js` file.
No other files need changing — `topic.html` and the list pages are fully data-driven.

**Add a new track:** create `js/[name]-topics-data.js` with its own array
and three helper functions, create `[name].html` (copy linux.html, swap names),
add a `trackConfig` entry in `topic.html`, and add nav links everywhere.

## Verified before packaging

All 107 topics across 3 tracks passed:
1. Data validation (content length, quiz structure, animation key validity)
2. Real DOM rendering (jsdom): animation renders, controls clicked, quiz answered
3. Completion callback: confirmed to fire after last question on every topic
4. Zero duplicate animation output confirmed across all 107 topics
