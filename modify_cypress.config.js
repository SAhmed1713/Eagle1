const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Automation Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    reportFilename: "[status]_[datetime]-[name]-report",
    code: "false",
    autoOpen: "true",
    overwrite: "false",
    saveAllAttempts: false,
  },
 
  defaultCommandTimeout: 6000,
  reporter: 'mochawesome',
 //The below project Id is for cypress dashboard
 projectId: "sfu53j",

  e2e: {
    
    setupNodeEvents(on, config) {  
     //require('cypress-mochawesome-reporter/plugin')(on);
    },
    //specPattern:'cypress/integration/examples/*.js'

   setupNodeEvents,
   // specPattern:'cypress/integration/AllTests/*.js'
   specPattern:'cypress/integration/examples/BDD/*.js'

  },
});
