// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@pinia/nuxt'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ['Inter var', 'sans-serif'],
            serif: ['Merriweather', 'serif']
          },
          textColor: {
            default: '#fefeff',
          },
        }
      }
    }
  }
})