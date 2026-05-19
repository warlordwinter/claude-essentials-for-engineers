# SKILL: write-tests

Use this skill whenever adding or completing Jest tests for this project.

## When to use

Any time a function in `src/` needs test coverage — new functions, bug fixes, or filling in `it.todo` stubs.

## Output requirements

- One `describe` block per function, named after the function
- Order: happy path → edge cases → error cases
- Test names are plain English sentences describing the expected behavior
- Never use `toBeTruthy` / `toBeFalsy` — use specific matchers (`toBe`, `toEqual`, `toThrow`)
- For functions that throw, use `expect(() => fn()).toThrow('exact message')`
- No mocking unless the function does I/O (this codebase has none)

## Template

```js
describe('functionName', () => {
  it('does the expected thing with normal input', () => {
    expect(functionName(normalInput)).toEqual(expectedOutput);
  });

  it('handles edge case X', () => {
    expect(functionName(edgeCaseInput)).toEqual(expectedOutput);
  });

  it('throws when required field is missing', () => {
    expect(() => functionName(badInput)).toThrow('human-readable message');
  });
});
```

## Steps

1. Read the function's JSDoc and implementation — understand what it does and what it's supposed to throw
2. Identify: happy path, 2–3 edge cases, error cases
3. Write tests in the template structure above
4. Run `npm test` and confirm they pass (or that failing ones expose real bugs)
5. If a test reveals a bug, note it in a comment — don't silently fix the source file
