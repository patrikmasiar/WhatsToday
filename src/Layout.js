import React from 'react';
import { View, Image } from 'react-native';
import { NavBar } from './components/ui';
import Title from './components/Title';
import WeatherInfo from './components/WeatherInfo';
import NameDayInfo from './components/NameDayInfo';
import DateInfo from './components/DateInfo';
import { isDay } from './libs';

const DAY_BG = require('./img/daybg.png');
const NIGHT_BG = require('./img/nightbg.png');

const Layout = () => {
  return (
    <View style={{ flex: 1}}>
      <NavBar
        title={<Title />}
      />
      <View style={{ position: 'relative', height: '100%', width: '100%' }}>
        <Image
          source={isDay() ? DAY_BG : NIGHT_BG}
          style={{
            flex: 1,
            height: '100%',
            width: '100%',
            resizeMode: 'cover',
            opacity: 1,
          }}
        />
        <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, width: '100%' }}>
          <DateInfo />
          <WeatherInfo />
          <NameDayInfo />
        </View>
      </View>

    </View>
  );
};

export default Layout