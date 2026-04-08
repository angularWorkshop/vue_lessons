# Resize Observer Lifecycle

## Goal

Treat a ResizeObserver as a resource that must be connected and released symmetrically.

## What you are training

- attach a resource in onMounted
- release the resource in onUnmounted
- render observer-driven state in the template

## Task

1. Create the ResizeObserver on mount.
2. Observe the panel element and render the measured width.
3. Disconnect the observer on unmount.

## Run locally

```bash
npm install
npm run test
```
