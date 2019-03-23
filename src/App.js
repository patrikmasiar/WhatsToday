import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Layout from './Layout';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#260063' }}>
        <StatusBar
          backgroundColor={ '#26639a' }
          barStyle={ 'light-content' }
        />
        <Layout />
      </View>
    );
  }
}


