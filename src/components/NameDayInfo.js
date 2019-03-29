import React from 'react';
import { Text, View } from 'react-native';
import { getNameDay } from '../libs/index.js';
import PropTypes from 'prop-types';

const LIGHT_TEXT = '#fff';
const DARK_TEXT = '#000';

const NameDayInfo = ({ isDay }) => (
  <View style={{
    alignItems: 'center',
    backgroundColor: isDay ? '#fff' : '#194a75',
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 20,
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      height: 4,
    }
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
