# SKILL: write-tests

Use this skill whenever adding or completing Jest tests for this project.

## When to use

Any time a function in `src/` needs test coverage — new functions, bug fixes, or filling in `it.todo` stubs.

## Describe block structure — non-negotiable

- One `describe` block per function, named exactly after the function: `describe('paginate', ...)`
- Never nest `describe` blocks
- Order inside every `describe`: happy path first, edge cases second, error cases last
- Minimum coverage per function: 1 happy path + 2 edge cases + every error the function can throw

## Test naming — non-negotiable

Test names are complete plain-English sentences that describe the exact behavior:

```js
// CORRECT
it('returns the first 10 items when page is 1 and pageSize is 10', ...)
it('returns an empty array when the input array is empty', ...)
it('throws "name and email are required" when name is missing', ...)

// WRONG — too vague
it('works correctly', ...)
it('handles edge cases', ...)
it('throws an error', ...)
```

## Matcher rules — non-negotiable

| Situation                                    | Correct matcher                                            | Never use                     |
| -------------------------------------------- | ---------------------------------------------------------- | ----------------------------- |
| Primitive equality (string, number, boolean) | `toBe`                                                     | `toEqual`, `toBeTruthy`       |
| Array or object equality                     | `toEqual`                                                  | `toBe`, `toBeTruthy`          |
| Function throws                              | `expect(() => fn()).toThrow('exact error message string')` | `.toThrow()` with no argument |
| Array length                                 | `toHaveLength(n)`                                          | `toBe(n)` on `.length`        |

Never use `toBeTruthy`, `toBeFalsy`, `toBeDefined`, or `toBeNull` — always assert the exact value.

## Template

```js
describe("functionName", () => {
  // Happy path — what it does with normal, valid input
  it("returns [specific expected output] given [specific normal input]", () => {
    expect(functionName(normalInput)).toEqual(expectedOutput);
  });

  // Edge case 1
  it("returns [specific output] when [specific edge condition]", () => {
    expect(functionName(edgeInput)).toEqual(expectedOutput);
  });

  // Edge case 2
  it("returns [specific output] when [specific edge condition]", () => {
    expect(functionName(edgeInput2)).toEqual(expectedOutput2);
  });

  // Error case — one it() block per distinct error the function throws
  it('throws "[exact error message from source]" when [condition]', () => {
    expect(() => functionName(badInput)).toThrow(
      "exact error message from source",
    );
  });
});
```

## Steps

1. Read the function's JSDoc and full implementation — note every `throw` with its exact message string
2. List: happy path inputs/outputs, 2+ edge cases, every error case
3. Write tests following the template and matcher rules above — no deviations
4. Run `npm test` — confirm passing tests pass and failing tests expose real bugs
5. If a test fails due to a bug in the source, add a comment: `// BUG: <description>` — never silently fix the source file
