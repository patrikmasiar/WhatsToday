import React from 'react';
import { View } from 'react-native';
import { NavBar } from './components/ui';
import Title from './components/Title';
import WeatherInfo from './components/WeatherInfo';
import NameDayInfo from './components/NameDayInfo';

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar
        title={<Title />}
      />
      <View style={{ flex: 1 }}>
        <WeatherInfo />
        <NameDayInfo />
      </View>
    </View>
  );
};

export default Layout