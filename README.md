# Живой поиск с debounce: не спамить API и не дёргать UI лишними запросами

## Goal

Сделать живой поиск, который не стреляет запросом на каждую клавишу и не дёргает интерфейс раньше времени.

## What you are training

- debounce UI-triggered async work
- test time-based behavior
- avoid unnecessary requests

## Task

1. задебаунсь live-search на 300мс
2. не отправляй лишние запросы во время быстрого ввода
3. покажи результат только после завершения таймера

## Run locally

```bash
npm install
npm run test
```
