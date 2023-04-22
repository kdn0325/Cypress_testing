const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    /* *는 지정된 이름과 관계없이 파일을 찾음 */
    specPattern : "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
});
