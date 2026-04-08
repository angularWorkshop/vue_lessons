# Reorder List Identity

## Goal

Keep item identity stable while the list order changes.

## What you are training

- connect a reorder action to the template
- use task.id as a stable key
- see how order changes without losing identity

## Task

1. Connect the reorder button.
2. Render the list through v-for with task.id as the key.
3. Show the new order after the click.

## Run locally

```bash
npm install
npm run test
```
