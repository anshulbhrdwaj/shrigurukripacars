import { useEffect } from 'react'
import Lenis, { LenisOptions } from 'lenis'

export const useLenis = (enabled: boolean = true, wrapper?: HTMLDivElement | null) => {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.06,
      wrapper: wrapper || window, // Use custom wrapper or default to window
      content: wrapper ? wrapper.children[0] as HTMLDivElement : undefined,
    } as LenisOptions)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [enabled, wrapper])
}
