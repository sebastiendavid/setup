import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from 'src/app';
import configureStore from 'src/store/configureStore';
import React from 'react';

const store = configureStore();

render(<Provider store={store}><App /></Provider>, document.getElementById('main'));
