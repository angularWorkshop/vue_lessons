# Пользовательская директива v-click-outside: закрыть dropdown без ложных срабатываний

## Goal

Собрать v-click-outside как честный низкоуровневый DOM-механизм, а не набор случайных document listeners.

## What you are training

- custom directives for DOM behavior
- distinguish inside and outside clicks
- clean up document listeners

## Task

1. добавь директиву v-click-outside на dropdown
2. игнорируй клики внутри самого dropdown
3. закрывай меню только по реальному внешнему клику

## Run locally

```bash
npm install
npm run test
```
