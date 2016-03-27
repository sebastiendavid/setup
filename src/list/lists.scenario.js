import { expect } from 'chai';

describe(__filename, () => {
  const browser = global.browser;

  before(() => {
    browser.url('/');
    browser.waitForExist('.App__lists');
  });

  it('should display lists', () => {
    const lists = browser.elements('.List ul');
    expect(lists.value).to.have.lengthOf(2);
  });
});
