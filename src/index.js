import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import './index.css';
import Main from './Main';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <Router>
        <Route component={Main} />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
