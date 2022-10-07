const path = require("path");
// const i18n = require("./next-i18next.config");

module.exports = {
  env: {
    // DOMAIN_NAME: "https://beta.beyondlove.pet",
    DOMAIN_NAME: "http://localhost:3002",
    APIKEY: "ccbb768861a9247c253c0c7a90a3d74c",
    API_SECRET_KEY: "8a2ec44b3ed188840b9a0e008a22b77a",
    API_STORE_FRONT_KEY: "104f7961f099131722645e7b4f53aa43",
    // i18n,
  },
  i18n: {
    defaultLocale: "en",
    locales: [
      "en",
      "mr-IN",
      "hi-IN",
      "kn-IN",
      "ml-IN",
      "gu-IN",
      "ta-IN",
      "te-IN",
    ],
    localePath: path.resolve("./public/locales"),
    defaultLanguage: "en",
    fallbackLng: ["en"],
  },
  reactStrictMode: true,
  trailingSlash: true,
  eslint: { ignoreDuringBuilds: true },
};
