# Операционный экран без async-хаоса: стабилизировать loading, empty, error и URL-sync

## Goal

Собрать операционный экран с честными async-состояниями и синхронизацией query без хаоса в шаблоне.

## What you are training

- coordinate loading, empty, error and query state
- treat async flow as explicit state machine
- keep editor screen stable

## Task

1. раздели loading, empty, error и success
2. свяжи строку фильтра с route query
3. не смешивай несколько экранных состояний в одной ветке

## Run locally

```bash
npm install
npm run test
```
