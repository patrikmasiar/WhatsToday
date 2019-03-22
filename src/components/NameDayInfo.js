import React from 'react';
import { Text, View } from 'react-native';
import { getNameDay } from '../libs/index.js';

const NameDayInfo = () => (
  <View style={{
    justifyContent: 'center',
    marginTop: 20,
    flexDirection: 'row',
  }}>
    <Text style={{
      color: '#fff',
      fontWeight: '500',
    }}>
      Dnes má meniny
    </Text>
    <Text style={{
      color: '#fff',
      textAlign: 'center',
    }}>
      {` ${getNameDay()}`}
    </Text>
  </View>
);

export default NameDayInfo;
