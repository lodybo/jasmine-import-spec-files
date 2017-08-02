"use strict";
exports.__esModule = true;
var JasmineSpecReporter = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    specs: [
        'test/app.spec.js'
    ],
    onPrepare: function () {
        jasmine.getEnv().addReporter(new JasmineSpecReporter({
            summary: {
                displayErrorMessages: false,
                displayStacktrace: false
            }
        }));
    },
    baseUrl: 'http://juliemr.github.io/protractor-demo/',
    framework: 'jasmine2'
};
