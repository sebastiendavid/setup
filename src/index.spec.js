import { expect } from 'chai';
import path from 'path';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe(path.relative(process.cwd(), __filename), () => {
  let ReactDOM;

  before(() => {
    global.document = {
      getElementById: sinon.spy()
    };
    ReactDOM = {
      '@noCallThru': true,
      render: sinon.spy()
    };
    proxyquire('src/index', {
      'src/app': {
        '@noCallThru': true
      },
      'src/store/configureStore': Object.assign(sinon.spy(), {
        '@noCallThru': true
      }),
      react: {
        '@noCallThru': true,
        createElement: sinon.spy()
      },
      'react-redux': {
        '@noCallThru': true
      },
      'react-dom': ReactDOM
    });
  });

  after(() => {
    global.document = null;
  });

  it('should render app', () => {
    expect(ReactDOM.render.callCount).to.equal(1);
  });
});
