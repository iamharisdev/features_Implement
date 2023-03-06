import React, {FC, useEffect, useRef} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import MainStack from './src/navigation';
import {store} from './src/redux/store';
type IAppStates = {
  isLoading: boolean;
};

const App: FC<IAppStates> = ({isLoading}) => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
