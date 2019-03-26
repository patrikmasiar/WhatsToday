import React from 'react';
import { Text, View } from 'react-native';
import { getNameDay } from '../libs/index.js';
import PropTypes from 'prop-types';

const LIGHT_TEXT = '#fff';
const DARK_TEXT = '#000';

const NameDayInfo = ({ isDay }) => (
  <View style={{
    alignItems: 'center',
    backgroundColor: isDay ? 'rgba(38,99,154,0.3)' : 'rgba(0,0,0,0.2)',
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.3)',
    paddingVertical: 15,
    borderRadius: 20,
  }}>
    <Text style={{
      color: isDay ? '#26639a' : LIGHT_TEXT,
      fontWeight: '500',
      fontSize: 16,
    }}>
      DNES MÁ MENINY:
    </Text>
    <View style={{ flexDirection: 'row', marginTop: 15 }}>
      {getNameDay().map((name, index) => {
        return (
          <Text key={index} style={{
            color: isDay ? DARK_TEXT : LIGHT_TEXT,
            textAlign: 'center',
            borderLeftWidth: index !== 0 ? 2 : 0,
            fontSize: 16,
            borderColor: isDay ? '#26639a' : '#3ded88',
            paddingRight: 15,
            paddingLeft: 15,
            fontWeight: '100',
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
