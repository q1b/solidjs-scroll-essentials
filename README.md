<p>
  <img width="100%" src="https://assets.solidjs.com/banner?type=solidjs-scroll-essentials&background=tiles&project=%20" alt="solidjs-scroll-essentials">
</p>

# solidjs-scroll-essentials

[![pnpm](https://img.shields.io/badge/maintained%20with-pnpm-cc00ff.svg?style=for-the-badge&logo=pnpm)](https://pnpm.io/)

solidjs-scroll-essentials provides you with required scroll based primitives to control scroll behavior such as scroll lock in solidjs.

## Quick start

Install it:

```bash
npm i solidjs-scroll-essentials
# or
yarn add solidjs-scroll-essentials
# or
pnpm add solidjs-scroll-essentials
```

Use it:

```tsx
import solidjs-scroll-essentials from 'solidjs-scroll-essentials'
```

## First Primitive `useScrollLock`

```jsx
import { useScrollLock } from "solidjs-scroll-essentials"
const [ isLocked, setScrollLocked ] = useScrollLock()
```

[stackblitz example](https://stackblitz.com/github/solidjs/templates/tree/master/ts?file%3Dsrc%2FApp.tsx) for this primitive

It handles layout shift, by adding padding to body tag & as well lock the scrolling as you wanted it to.

## Second Primitive `useScrollIntoView`

```jsx
import { useScrollIntoView } from "solidjs-scroll-essentials"
const { scrollIntoView, setTargetRef } = useScrollIntoView()
```

[stackblitz example](https://stackblitz.com/github/solidjs/templates/tree/master/ts?file%3Dsrc%2FApp.tsx)

## Third Primitive `useScrollPosition`
```jsx
import { useScrollPosition } from "solidjs-scroll-essentials"
const { x,y } = useScrollPosition()
```

[stackblitz example](https://stackblitz.com/github/solidjs/templates/tree/master/ts?file%3Dpackage.json)

## Forth Primitive `useWindowScroll`

```jsx
import { useWindowScroll } from 'solidjs-scroll-essentials'
const [position, scrollTo] = useWindowScroll
```

---

### Acknowledgement
- Mantine Core Library
