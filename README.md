# Interval and Listener Cleanup

## Goal

Keep timer and window listener setup paired with an explicit cleanup story.

## What you are training

- start timers and listeners in onMounted
- stop them in onUnmounted
- verify the screen while mounted and after unmount

## Task

1. Start the interval and resize listener on mount.
2. Render the tick counter and viewport state.
3. Clear the interval and remove the listener on unmount.

## Run locally

```bash
npm install
npm run test
```
