import { expect } from 'chai';

describe(__filename, () => {
  const browser = global.browser;

  before(() => {
    browser.url('/');
    browser.waitForExist('.App');
  });

  it('should display app', () => {
    expect(browser.elements('.App__header').value).to.have.lengthOf(1);
    expect(browser.elements('.App__lists').value).to.have.lengthOf(1);
  });
});
