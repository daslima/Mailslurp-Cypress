const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    MAILSLURP_API_KEY: 'YOUR API KEY',
  },
  e2e: {
    baseUrl: 'https://playground.mailslurp.com',
    setupNodeEvents(on, config) {

    },
  },
  defaultCommandTimeout: 30000,
  requestTimeout: 30000,
  responseTimeout: 30000
});
