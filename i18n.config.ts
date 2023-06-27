// import { defineI18nConfig } from "@nuxtjs/i18n/dist/runtime/composables.mjs";
// import { defineI18nConfig } from "#imports";
import { defineI18nConfig } from "#i18n";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
    },
    fr: {
      welcome: "Bienvenue",
    },
  },
}));
