import { expect } from 'chai';
import path from 'path';
import proxyquire from 'proxyquire';

describe(path.relative(process.cwd(), __filename), () => {
  let module;

  before(() => {
    module = proxyquire('src/app', {
      './app.scss': {
        '@noCallThru': true
      },
      'src/list': {
        '@noCallThru': true
      },
      'src/bigData': {
        '@noCallThru': true
      }
    });
  });

  it('default export should be a function', () => {
    expect(module).to.be.an('object');
    expect(module.default).to.be.a('function');
  });
});
