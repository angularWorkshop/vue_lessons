# Guard и возврат после логина: сохранить целевой маршрут без циклического redirect

## Goal

Собрать guard с возвратом после логина без бесконечных redirect-циклов.

## What you are training

- protect routes with navigation guard
- preserve redirect target
- finish auth flow without loops

## Task

1. добавь requiresAuth через meta
2. сохрани redirect в query на странице логина
3. после логина верни пользователя на исходный маршрут

## Run locally

```bash
npm install
npm run test
```
