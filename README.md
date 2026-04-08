# Viewport-директива с cleanup: подсветить карточку при входе в экран и корректно снять observer

## Goal

Сделать директиву, которая работает с observer-подобным ресурсом и не забывает про cleanup.

## What you are training

- custom directives for DOM mechanics
- attach and cleanup observer resources
- reflect viewport events in state

## Task

1. создай директиву, которая регистрирует observer на mount
2. обновляй activeId при входе карточки в viewport
3. корректно отключай observer при unmount

## Run locally

```bash
npm install
npm run test
```
