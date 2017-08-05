import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import AppContainer from './app/containers/AppContainer';
import reducer from './app/reducers';


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      ),
    );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({}); // no initial state for now.

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default App;
