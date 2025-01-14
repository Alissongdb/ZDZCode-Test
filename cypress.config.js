const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: ('https://planoaliados.com.br/portal/'),
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
