// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  extends: ['@nuxt/ui-pro'],
  modules: ['@nuxt/ui', "@nuxt/image"],
  devServer: {
    host: "0.0.0.0"
  }
})