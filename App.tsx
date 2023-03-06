import React from 'react';
import {Provider} from 'react-redux';
import MainNavigation from './scr/navigation';
import {store, persistor} from './scr/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
