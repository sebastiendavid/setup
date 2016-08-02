import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from 'src/app';
import configureStore from 'src/store/configureStore';

const store = configureStore();

render(<Provider store={store}><App /></Provider>, document.getElementById('main'));
