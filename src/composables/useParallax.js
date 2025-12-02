import { onMounted, onBeforeUnmount } from 'vue'

export function useParallax() {
  let handler

  function update() {
    const nodes = document.querySelectorAll('.parallax-on-scroll')
    nodes.forEach((el) => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 0.2
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight
      const center = rect.top + rect.height / 2
      const distanceFromCenter = center - viewportH / 2
      const translate = Math.max(Math.min(distanceFromCenter * speed, 40), -40)
      el.style.transform = `translateY(${translate.toFixed(1)}px)`
    })
  }

  onMounted(() => {
    if (typeof window === 'undefined') return
    update()
    handler = () => window.requestAnimationFrame(update)
    window.addEventListener('scroll', handler, { passive: true })
    window.addEventListener('resize', handler)
  })

  onBeforeUnmount(() => {
    if (handler) {
      window.removeEventListener('scroll', handler)
      window.removeEventListener('resize', handler)
    }
  })

  return {}
}
