# AGENTS.md: Airport Pickup Timer

Read this before every task. These rules always apply.

## The product

Drivers and family members pick people up at Keflavík (KEF). The app tells them when to leave home, using live flight status, traffic and weather. The passenger shares status updates through a link. A shuttle company or guesthouse uses our own CMS to manage pickup points and instructions.

- Driver path: enter flight and car → create a trip link → dashboard (countdown, milestones, pickup door) → "Leave now" and delay alerts.
- Passenger path: open the shared link → countdown → one-tap status (Landed, Immigration, Baggage, At curb) → exit door.
- CMS: sign in → add or edit pickup points (name, terminal door, instructions, photo and alt text).

## Stack

- Next.js (App Router) and React, in TypeScript with `strict` on. No `any` without a comment explaining why.
- Plain CSS with CSS modules. Design tokens live in `src/styles/tokens.css`.
- External APIs are called **only from the server**, in `src/app/api/**/route.ts`, never from the browser.

## Folders

```
src/app/            pages and API routes
src/components/     the component library (one folder per component)
src/lib/            server code: API clients, cache, leave-time calculation
src/styles/         tokens.css
docs/a11y.md        accessibility annotations copied from Figma
report/notes/       daily notes pages
report/index.html   the AI report
```

## Rules

**Keys and APIs**
- Secret keys come from `process.env` on the server. Never use `NEXT_PUBLIC_` for a secret, and never commit `.env.local`.
- Every flight API call goes through the server cache in `src/lib/cache.ts`. The free plan has very few calls, so never call it in a loop, on every render or for flights nobody tracks.
- Every API response has a TypeScript type. Validate what comes back before you use it.
- Every call has loading, empty and error states, including "rate limit reached".

**UI**
- Before building or changing UI, read `.claude/skills/design-system/SKILL.md` and `.claude/skills/accessibility/SKILL.md`, whatever agent you are.
- Mobile first: style for 360px wide, then add `min-width` media queries.
- No raw colours outside `tokens.css`. Stylelint fails the build if you add one.

**Workflow**
- Work on a feature branch and open a pull request. A human reviews every pull request, the agent's too.
- Small commits with clear messages. Run `npm run check` before you push.
- If you can't explain a line, it doesn't belong in the project. Keep code simple enough for a student to explain it at the presentation.
- Daily notes: use `.claude/skills/daily-notes/SKILL.md`.

## Commands

```
npm run dev        start the dev server
npm run check      typecheck, ESLint, Stylelint and build (the same as CI)
```

## What the agent got wrong (keep adding to this)

When the agent makes a mistake that a rule would have prevented, add the rule above and write it down here with the date.

- _Nothing yet._
