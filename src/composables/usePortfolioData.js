import { ref } from 'vue'

const state = {
  data: ref(null),
  loading: ref(false),
  error: ref(null)
}

export function usePortfolioData () {
  async function load(force = false) {
    if (state.data.value && !force) return state.data.value
    state.loading.value = true
    state.error.value = null
    try {
      const res = await fetch('/MyData.json', { cache: 'no-store' })
      if (!res.ok) throw new Error(`Failed to load MyData.json (${res.status})`)
      const json = await res.json()
      state.data.value = json
      return json
    } catch (err) {
      state.error.value = err
      console.error(err)
      return null
    } finally {
      state.loading.value = false
    }
  }

  return { ...state, load }
}
