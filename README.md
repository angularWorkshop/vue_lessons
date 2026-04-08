# useRemoteList как composable: вынести API и не потерять ясность состояний

## Goal

Вынести удалённый список и его статусы в composable, не потеряв ясность loading/error/success.

## What you are training

- extract async list logic into a composable
- return state and reload contract
- keep page component thin

## Task

1. создай useRemoteList с state и load
2. верни loading/error/items как единый контракт
3. используй composable из экрана

## Run locally

```bash
npm install
npm run test
```
