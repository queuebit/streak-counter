# `@queuebit/streak-counter` - a basic streak counter

This is a basic streak counter - inspired by DuoLingo - written in TypeScript and meant for the browswer (uses `localStorage`).

## Install

```shell
npm install @queuebit/streak-counter
```

or

```shell
yarn add @queuebit/streak-counter
```

## Usage

```node
import { streakCounter } from "@queuebit/streak-counter";

const today = new Date();
const streak = streakCounter(localStorage, today);
// streak returns an object:
// {
//		currentCount: 1,
//		lastLoginDate: "11/11/2021",
//		startDate: "11/11/2021",
// }
```
