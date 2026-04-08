# Fix Derived State Drift

## Goal

Remove duplicated summary fields and derive them honestly from the cart items.

## What you are training

- recognize duplicated summary state
- replace summary mutations with computed values
- keep CTA text tied to the real item count

## Task

1. Stop mutating the summary object manually.
2. Derive itemCount, total, and ctaLabel through computed.
3. Render the derived values in the template.

## Run locally

```bash
npm install
npm run test
```
