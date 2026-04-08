# Fix a Self-Updating Watcher

## Goal

Stop rewriting the same query source inside its own watcher.

## What you are training

- spot a watcher that rewrites the source field
- move normalization into computed
- keep side effects separate from source state

## Task

1. Remove the self-updating watcher pattern.
2. Add a computed normalized query.
3. Update document.title from the normalized value without rewriting the input field.

## Run locally

```bash
npm install
npm run test
```
