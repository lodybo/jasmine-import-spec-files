"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var _calculate_spec_1 = require("./_calculate.spec");
describe('App', function () {
    it('should work', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        expect(protractor_1.browser.getTitle()).toBe('Super Calculator');
    });
    _calculate_spec_1["default"]();
});
