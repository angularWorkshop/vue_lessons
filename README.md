# Интеграция с внешним виджетом: обновлять входные данные и чисто освобождать ресурс

## Goal

Интегрировать внешний imperative widget так, чтобы обновление входных данных и cleanup были частью контракта.

## What you are training

- coordinate Vue state with an external resource
- update an imperative widget after prop changes
- cleanup external subscriptions on unmount

## Task

1. инициализируй внешний widget в контейнере
2. обновляй widget, когда меняется label
3. освобождай ресурс в cleanup при размонтировании

## Run locally

```bash
npm install
npm run test
```
