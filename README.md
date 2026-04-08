# Product Editor Modal

## Goal

Edit a selected product in a modal without breaking one-way data flow.

## What you are training

- open a modal for the active item
- keep a local draft inside the child form
- apply saved changes in the parent list

## Task

1. Open the editor for the chosen product.
2. Stop mutating the parent product directly inside the modal.
3. Save the edited draft back into the parent list and close the modal.

## Run locally

```bash
npm install
npm run test
```
