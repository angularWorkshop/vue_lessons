# Честный экран загрузки: показать loading, empty, error и success без конфликтов

## Goal

Собрать честный экран загрузки с ясными состояниями loading, empty, error и success.

## What you are training

- model async screen states explicitly
- render mutually exclusive UI branches
- test loading, empty and error states

## Task

1. покажи loading сразу после старта
2. раздели empty, error и success на отдельные ветки
3. не показывай конфликтующие состояния одновременно

## Run locally

```bash
npm install
npm run test
```
