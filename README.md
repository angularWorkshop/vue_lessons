# Защита от устаревших ответов: не позволить старому запросу перетереть новый результат

## Goal

Защитить экран от устаревших ответов, чтобы старый запрос не перетирал новый результат.

## What you are training

- guard against stale async responses
- track current request identity
- keep screen state honest

## Task

1. отслеживай идентификатор активного запроса
2. игнорируй поздний ответ устаревшего поиска
3. обновляй результаты только из последнего запроса

## Run locally

```bash
npm install
npm run test
```
