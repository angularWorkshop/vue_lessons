# Фильтры в URL: синхронизировать query со строкой поиска и уровнем

## Goal

Связать фильтры экрана с query-параметрами маршрута так, чтобы URL отражал реальное состояние интерфейса.

## What you are training

- sync local UI state with URL query
- restore state from route on first render
- treat URL as a user-facing contract

## Task

1. инициализируй search и level из route.query
2. обновляй query при изменении полей
3. не теряй состояние после прямого захода по URL

## Run locally

```bash
npm install
npm run test
```
