import React from 'react';
import { Text, View } from 'react-native';
import { getNameDay } from '../libs/index.js';
import PropTypes from 'prop-types';

const LIGHT_TEXT = '#fff';
const DARK_TEXT = '#000';

const NameDayInfo = ({ isDay }) => (
  <View style={{
    alignItems: 'center',
    marginTop: 20,
  }}>
    <Text style={{
      color: isDay ? DARK_TEXT : LIGHT_TEXT,
      fontWeight: '500',
    }}>
      DNES MÁ MENINY:
    </Text>
    <View style={{ flexDirection: 'row', marginTop: 15 }}>
      {getNameDay().map((name, index) => {
        return (
          <Text key={index} style={{
            color: '#000',
            textAlign: 'center',
            backgroundColor: 'rgba(255,255,255,0.7)',
            borderWidth: 1,
            fontSize: 15,
            borderColor: 'rgba(255,255,255,1)',
            marginLeft: index !== 0 ? 7 : 0,
            paddingHorizontal: 15,
            paddingVertical: 5,
            fontWeight: '100',
            borderRadius: 30,
          }}>
            {name.trim()}
          </Text>
        )
      })}
    </View>
  </View>
);

NameDayInfo.propTypes = {
  isDay: PropTypes.bool.isRequired,
};

export default NameDayInfo;
