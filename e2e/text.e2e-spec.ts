import { browser, by, element } from 'protractor';

describe('Calculate', () => {

  beforeEach(() => {

    browser.get('/');

  });

  it('should have a textarea and calculate button', () => {

    expect(element(by.css('app-root app-text form textarea')).isPresent()).toEqual(true);

    expect(element(by.css('app-root app-text form button')).isPresent()).toEqual(true);

  });

  it('should allow calculating', () => {

    const calculateButton = element(by.css('button'));

    const calculateBox = element(by.css('textarea'));

    calculateBox.sendKeys('lorem!.');

    calculateButton.click().then(() => {

      const result = element.all(by.css('app-text span'));

      expect(result.getText()).toEqual(['2']);

    });

  });

});
