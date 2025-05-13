import { useEffect } from 'react'
import Lenis, { LenisOptions } from 'lenis'

export const useLenis = (enabled: boolean = true) => {
  useEffect(() => {
    if (!enabled) return;

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    } as LenisOptions)

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [enabled])
}
