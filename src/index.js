/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import {View, StatusBar, AppRegistry, AsyncStorage} from 'react-native';
import Layout from './Layout';
import {name as appName} from '../app.json';
import {persistStore} from 'redux-persist';
import {setAppReady} from './store/actions';
import store from './store/store';
import {Provider} from 'react-redux';

persistStore(
  store,
  {
    storage: AsyncStorage,
    whitelist: [
      'city',
      'app',
      'notes',
    ],
  },
  () => {
    store.dispatch(setAppReady())
  }
);

const App = () => {
  return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <StatusBar
            backgroundColor={ '#26639a' }
            barStyle={ 'light-content' }
          />
          <Layout />
        </View>
      </Provider>
  );
};

const Application = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
};

AppRegistry.registerComponent(appName, () => Application);
