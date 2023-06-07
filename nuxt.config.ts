// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "./src",
  css: ["@/styles/globals.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      cssnano: {},
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  app: {
    head: {
      titleTemplate: "%s | Nuxt3 JKinsight",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    classPrefix: "",
    classSuffix: "",
    storageKey: "color-mode",
  },
  /* below settings only if you are deploying to AWS Amplify */
  alias: {
    "./runtimeConfig": "./runtimeConfig.browser",
  },
  vite: {
    define: {
      "window.global": {},
    },
  },
});
