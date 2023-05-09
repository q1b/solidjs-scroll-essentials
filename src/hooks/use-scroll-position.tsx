import { createEffect, createSignal, onCleanup } from 'solid-js'
import { throttle } from '@solid-primitives/scheduled'

export const useScrollPosition = (throttleBy = 500) => {
  const [scrollPosition, setScrollPosition] = createSignal<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const handleScroll = throttle(
    () => setScrollPosition({ x: window.scrollX, y: window.scrollY }),
    throttleBy,
  )

  createEffect(() => {
    window.addEventListener('scroll', handleScroll)
    onCleanup(() => window.removeEventListener('scroll', handleScroll))
  }, [handleScroll])

  return scrollPosition
}

export default useScrollPosition
