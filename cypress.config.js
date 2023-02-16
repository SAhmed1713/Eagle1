const { defineConfig } = require("cypress");


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
  //reporter: 'mochawesome',
 //The below project Id is for cypress dashboard
 projectId: "sfu53j",

  e2e: {
    

    setupNodeEvents(on, config) {
       
     //require('cypress-mochawesome-reporter/plugin')(on); 

   
    },
    

    //specPattern:'cypress/integration/examples/*.js'
   
    //specPattern:'cypress/integration/AllTests/*.js'
    specPattern:'cypress/integration/Eagle/*.js'
    

  },
});
