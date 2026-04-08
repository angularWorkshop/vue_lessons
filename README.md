# Orders Screen States

## Goal

Read conditional rendering as a set of honest screen scenarios.

## What you are training

- separate loading, empty, error, and success branches
- use v-show for a helper block that stays mounted
- render a success list with stable keys

## Task

1. Keep the help panel mounted through v-show.
2. Render the success list through v-for with order.id as the key.
3. Make loading, empty, and error stay mutually exclusive.

## Run locally

```bash
npm install
npm run test
```
