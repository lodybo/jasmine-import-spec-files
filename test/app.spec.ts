import { browser, element, by } from 'protractor';
import calcTest from './_calculate.spec';

describe('App', () => {
  it('should work', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');

    expect(browser.getTitle()).toBe('Super Calculator');
  });

  calcTest();
});