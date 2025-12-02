import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import km from './locales/km.json'

const savedLocale = typeof window !== 'undefined' ? localStorage.getItem('locale') : null
const locale = savedLocale || 'en'

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale,
  fallbackLocale: 'en',
  messages: { en, km }
})

export function setLocale(code) {
  i18n.global.locale.value = code
  if (typeof window !== 'undefined') {
    localStorage.setItem('locale', code)
    document.documentElement.setAttribute('lang', code)
  }
}

if (typeof window !== 'undefined') {
  document.documentElement.setAttribute('lang', locale)
}

export default i18n
