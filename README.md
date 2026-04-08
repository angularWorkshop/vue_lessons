# Фокус после рендера: использовать template ref и nextTick без гонки с DOM

## Goal

Показать, что nextTick нужен тогда, когда после смены state нам важно дождаться уже обновлённого DOM.

## What you are training

- work with template refs carefully
- wait for DOM update with nextTick
- avoid race conditions around focus

## Task

1. сначала открой панель поисковой строки
2. после рендера сфокусируй input через nextTick
3. не пытайся фокусировать DOM-узел раньше, чем он появился

## Run locally

```bash
npm install
npm run test
```
