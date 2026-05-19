# CLAUDE.md

This file gives you immediate context on the leland-demo project. Read it before touching any code.

## What this project is

A lightweight Node.js utility API used as a teaching demo. It has no framework (no Express, no Fastify) — just plain modules. Don't add dependencies without asking.

## Project structure

```
src/
  api/       — domain logic (users, etc.)
  utils/     — shared helpers used across the codebase
  tests/     — Jest test files, colocated with src
scripts/     — one-off automation scripts, not imported by src
```

## Conventions

- CommonJS only (`require`/`module.exports`) — no ESM
- No TypeScript — plain JS with JSDoc comments for types
- Functions throw `Error` objects with human-readable messages; callers handle them
- IDs are always numbers, not strings
- Dates stored as ISO 8601 strings (`new Date().toISOString()`)

## Testing

```bash
npm test          # run all tests
npm test -- --watch  # watch mode
```

Tests use Jest. One `describe` block per function. Test the happy path first, then edge cases. If a test is skipped with `it.todo`, fill it in — don't delete it.

## Known issues

- `paginate()` in `src/utils/helpers.js` has an off-by-one bug on page > 1. Fix is one line. Tests expose it.
- `createUser` uses `.find()` on a Map iterator — works in Node 18+ only

## What I want from Claude

- Fix bugs by changing the minimal amount of code
- When writing tests, follow the existing `describe` structure exactly
- Never add `console.log` to src files (scripts are fine)
- If something is ambiguous, ask — don't guess and refactor
