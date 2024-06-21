// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    modules: ["@nuxt/ui"],
    css: ["~/assets/css/tailwind.css", "~/assets/css/style.css"],
    colorMode: {
        preference: "light",
    },
});
