# Project Info

This is our project. It is a web application that does things. Please be helpful and write good code. We care a lot about code quality and making sure things work correctly. Always try your best.

## Important!!!

ALWAYS write clean code. Clean code is very important to us. Make sure to follow best practices at all times. Best practices include things like naming variables well, not writing too many lines per function, and making sure your code is readable. Readability matters. Please keep this in mind.

## Tech Stack

We use JavaScript. Also possibly TypeScript in some places. We might be moving to TypeScript soon but haven't decided yet. Some files use CommonJS and some use ESM, it depends on when they were written. We also use React on the frontend but there is no frontend in this repo (yet). We were using Webpack but switched to Vite, or maybe we're switching, check with the team. Node version should be fine, we have a recent one installed.

## Database

We use Postgres. Or we might be moving to MySQL, there were some discussions about it. The ORM is Sequelize but some newer files use raw queries because someone didn't like Sequelize. If you're not sure which to use, just pick one. The schema is in the database somewhere, ask someone if you need it.

## How To Run The Project

First make sure you have all the dependencies. Then run the project. If it doesn't work check that your environment variables are set. There is a .env.example somewhere probably. The main script to run things is either `npm start` or `npm run dev`, try both. Port is 3000 or 8080.

## Code Style

We use ESLint. The config is somewhere in the project. Prettier is also set up, or it was at some point. Just try to match the style of whatever file you're editing. Tabs vs spaces has been a thing, we haven't fully resolved it. 4 spaces is probably right but some files use 2.

## Testing

Tests are important! We have Jest set up. To run tests do npm test (or yarn test if you're using yarn, we're actually in the middle of switching package managers). Coverage should be high. Aim for 80% or maybe 90%, the team hasn't agreed on this yet. There are some tests that are skipped because they were flaky, you can ignore those or maybe fix them if you have time.

## Git

Use feature branches. Branch names should be descriptive. Commit messages should explain what you did. Squash commits before merging maybe. We use GitHub. PRs should be reviewed but sometimes we push to main if it's urgent. 

## Performance

Performance is important. Don't write slow code. Avoid N+1 queries (ask someone what this means if you don't know). Caching is set up somewhere. Redis might be involved.

## Security

Security is very important!!! Never expose secrets. Don't put API keys in the code. Input validation is important. We have some middleware for auth but it's not applied everywhere yet, check before assuming a route is protected.

## Other Notes

- There was a refactor started in Q3 that isn't finished
- Some files in /legacy should not be touched
- Bob wrote most of the original code and he doesn't work here anymore
- There's a Slack channel for engineering questions
- We're planning to rewrite the whole thing in Go at some point maybe
- If something seems weird it's probably fine
- The docs in /docs are outdated, don't trust them
- We had a bug with timezones that was fixed but might still be an issue in some places
- Ask the team if you're unsure about anything

## Final Note

Please write good code and be helpful. We trust you Claude! Do your best :)
