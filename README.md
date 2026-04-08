# defineModel Profile Field

## Goal

Stop mutating a prop directly and move the child field to defineModel.

## What you are training

- recognize a direct prop mutation smell
- use defineModel in a child component
- keep the parent preview as the source of truth

## Task

1. Replace the old child contract with defineModel.
2. Bind the input to the model variable.
3. Make the parent preview update through the child input.

## Run locally

```bash
npm install
npm run test
```
