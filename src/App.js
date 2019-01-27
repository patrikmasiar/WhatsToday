import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Layout from './Layout';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={ '#d6e5f3' }
          barStyle={ 'dark-content' }
        />
        <Layout />
      </View>
    );
  }
}


