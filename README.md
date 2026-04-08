# Починить store-зависимости: убрать цикл и скрытую мутацию данных

## Goal

Сделать глобальное состояние явным и читаемым через Pinia, а не через случайные копии данных по компонентам.

## What you are training

- Pinia stores as explicit contracts
- state + getters + actions
- test how UI reacts to store changes

## Task

1. держи состояние в store, а не в случайных локальных копиях
2. используй getter или action там, где есть производное поведение
3. сделай так, чтобы экран честно читал store-состояние

## Run locally

```bash
npm install
npm run test
```
