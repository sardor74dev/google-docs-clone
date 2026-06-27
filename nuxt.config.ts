// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/main.css'],
  runtimeConfig: {
    ckeditorSecretKey: process.env.CKEDITOR_SECRET_KEY,
    public: {
      ckeditorLicenseKey: process.env.NUXT_PUBLIC_CKEDITOR_LICENSE_KEY || '',
      ckeditorCloudServicesTokenUrl: process.env.NUXT_PUBLIC_CKEDITOR_CLOUD_SERVICES_TOKEN_URL || '/api/auth',
      ckeditorCloudServicesWebsocketUrl: process.env.NUXT_PUBLIC_CKEDITOR_CLOUD_SERVICES_WEBSOCKET_URL || '',
    }
  }
})
