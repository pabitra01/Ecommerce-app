import React from 'react';
import Navigation from './src/navigations/Navigation';
import {Provider} from 'react-redux';
import {configureReducer} from './src/redux';

const store = configureReducer();
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
