---
name: daily-notes
description: Turns a student's daily notes into the report page the brief requires. Use when someone says "daily notes", "write my notes" or gives you their bullets for the day.
---

# Daily notes

Each student writes a notes page every day and commits it the same day.

## What you need from the student

Ask for these if they are missing. Never make them up:
- their name (as used in file names, lower case, for example `oliver`)
- the date (default: today)
- their own bullets: what they asked, what the AI returned, what they changed and why, what they learned

## What you write

Save to `report/notes/<YYYY-MM-DD>-<name>.html`, for example `report/notes/2026-11-20-oliver.html`.

The page has two sections, in this order:

1. **"My notes"**: the student's bullets **word for word**. Don't fix their spelling, rephrase or add anything.
2. **"Agent's account"**: your own short, factual account of the day:
   - what you built, with short commit hashes (`git log --since=midnight --author=<name> --oneline`)
   - where you were wrong, and how it was caught (a review, a test, CI, the student)
   - any rule added to AGENTS.md or a skill because of it

## Rules

- Plain, valid HTML with `lang="en"`, a `<title>` with the date and name, one `h1`, and `h2` for the two sections. Link to `../index.html`.
- No raw chat transcripts, no API keys, no personal data about interviewees.
- Keep it short: a few bullets per section is enough.
- After writing, add a link to the page in the notes list in `report/index.html` (create the list if it doesn't exist).
