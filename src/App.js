import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import Layout from './Layout';
import { isDay } from './libs';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#260063' }}>
        <StatusBar
          backgroundColor={ isDay() ? '#26639a' : '#42229d' }
          barStyle={ 'light-content' }
        />
        <Layout />
      </View>
    );
  }
}


