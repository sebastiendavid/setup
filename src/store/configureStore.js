import { applyMiddleware, compose, createStore } from 'redux';
import reducers from 'src/store/reducers';
import thunk from 'redux-thunk';

const hasDevTools = typeof window.devToolsExtension === 'function';

export default function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunk),
      hasDevTools ? window.devToolsExtension() : f => f
    )
  );
  if (hasDevTools && module.hot) {
    module.hot.accept('src/store/reducers', () =>
      store.replaceReducer(reducers)
    );
  }
  return store;
}
