# Watch Filters Autosave

## Goal

Use watch as an external synchronization bridge for storage and document title.

## What you are training

- treat watch as a side-effect bridge
- save reactive filters into localStorage
- sync document.title with the active query

## Task

1. Persist the filters through watch.
2. Update document.title from the current query.
3. Keep the input handlers free from storage and title logic.

## Run locally

```bash
npm install
npm run test
```
