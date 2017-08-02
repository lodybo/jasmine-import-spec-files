"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
var calcTest = function () {
    describe('Calculate', function () {
        it('should add one and two', function () {
            protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
            protractor_1.element(protractor_1.by.model('first')).sendKeys(1);
            protractor_1.element(protractor_1.by.model('second')).sendKeys(2);
            protractor_1.element(protractor_1.by.id('gobutton')).click();
            expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).
                toEqual('3');
        });
    });
};
exports["default"] = calcTest;
