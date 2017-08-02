import { Config } from 'protractor';

const JasmineSpecReporter = require('jasmine-spec-reporter').SpecReporter;

export let config: Config = {
    // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.42.0.jar',
    // chromeDriver: '../node_modules/protractor/selenium/chromedriver',

    // location of E2E test specs
    specs: [
        'test/app.spec.js'
    ],

    // configure multiple browsers to run tests
    

    // or configure a single browser

    // capabilities: {
    //    'browserName': 'chrome'
    // },

    // capabilities: {
    //     'browserName': 'firefox'
    // },

    // Prepare for our tests
    onPrepare: () => {
        // Add new reporter
        jasmine.getEnv().addReporter(new JasmineSpecReporter({
            summary: {
                displayErrorMessages: false,
                displayStacktrace: false
            }
        }));
    },


    // url where your app is running, relative URLs are prepending with this URL
    baseUrl: 'http://juliemr.github.io/protractor-demo/',

    // testing framework, jasmine is the default
    framework: 'jasmine2'
};
