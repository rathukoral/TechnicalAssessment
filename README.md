# TechnicalAssessment
 Techinical assessment for test automation. This is a test suite built with WebdriverIO, a popular testing framework for Node.js that allows you to run automated tests on web applications.

# Requirements
To use this test suite, you'll need to have the following software installed:
- Node.js (Version 16 or higher )
- WebdriverIO

# Installation
To install the dependencies for this test suite, run the following command:
- npm install
- Local PC Chrome version should match with the given chrome driver version in package.json (If you have chorme version 112 in your local PC please update the package.JSON with chromedriver version 112) 
# Configuration
This test suite is pre-configured to run tests using the configuration file located in ./wdio.conf.js. You can modify this file to configure the test suite to your needs.

# Running the Tests
To run the tests, use the following command:
- npm run wdio

This will launch the tests using the configuration specified in the wdio.conf.js file.

# View Allure Report
To view the report , use the following command:
- allure generate allure-results && allure open

This will open up a new browser window and will display all the results in a beautiful HTML format.

# Dependencies
This test suite has the following dependencies:

@wdio/allure-reporter: version 8.8.2
@wdio/cli: version 8.7.0
@wdio/local-runner: version 8.7.0
@wdio/mocha-framework: version 8.7.0
@wdio/spec-reporter: version 8.7.0
chromedriver: version 111.0.0
wdio-chromedriver-service: version 8.1.1
properties: version 1.2.1
