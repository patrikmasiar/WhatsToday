import React from 'react';
import { View } from 'react-native';
import { NavBar } from './components/ui';
import Title from './components/Title';
import WeatherInfo from './components/WeatherInfo';

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar
        title={<Title />}
      />
      <View style={{ flex: 1 }}>
        <WeatherInfo />
      </View>
    </View>
  );
};

export default Layout