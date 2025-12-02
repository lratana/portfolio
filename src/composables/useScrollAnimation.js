import { onMounted, onBeforeUnmount } from 'vue'

export function useScrollAnimation() {
  let observer

  onMounted(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return
    
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0.15
    })

    const targets = document.querySelectorAll('.animate-on-scroll')
    targets.forEach((el) => observer.observe(el))
  })

  onBeforeUnmount(() => {
    if (observer) observer.disconnect()
  })

  return {}
}
