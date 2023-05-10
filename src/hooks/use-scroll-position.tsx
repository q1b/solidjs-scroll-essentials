import { createSignal, onCleanup, onMount } from 'solid-js'
import { throttle } from '@solid-primitives/scheduled'

export const useScrollPosition = (throttleBy = 500) => {
  const [scrollPositionX, setScrollPositionX] = createSignal<number>(0)
  const [scrollPositionY, setScrollPositionY] = createSignal<number>(0)

  const handleScroll = throttle(
    () => {
      setScrollPositionX(window.scrollX)
      setScrollPositionY(window.scrollY)
    },
    throttleBy,
  )

  onMount(() => {
    window.addEventListener('scroll', handleScroll)
    onCleanup(() => window.removeEventListener('scroll', handleScroll))
  })

  return { x: scrollPositionX, y: scrollPositionY }
}

export default useScrollPosition
