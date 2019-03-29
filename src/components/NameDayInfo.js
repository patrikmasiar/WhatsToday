import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { getNameDay } from '../libs/index.js';
import PropTypes from 'prop-types';

const LIGHT_TEXT = '#fff';
const DARK_TEXT = '#000';

const NameDayInfo = ({ isDay }) => (
  <View style={[style.wrapper, isDay && style.wrapperNight]}>
    <Text style={{
      color: isDay ? '#26639a' : LIGHT_TEXT,
      fontWeight: '500',
      fontSize: 16,
    }}>
      DNES MÁ MENINY:
    </Text>
    <View style={style.innerWrapper}>
      {getNameDay().map((name, index) => {
        return (
          <Text key={index}
            style={[style.name, {
              color: isDay ? DARK_TEXT : LIGHT_TEXT,
              borderLeftWidth: index !== 0 ? 2 : 0,
              borderColor: isDay ? '#26639a' : '#3ded88',
            }]}
          >
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

const style = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    marginHorizontal: 5,
    borderRadius: 20,
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      height: 4,
    }
  },
  wrapperNight: {
    backgroundColor: '#194a75',
  },
  innerWrapper: {
    flexDirection: 'row',
    marginTop: 15
  },
  name: {
    fontSize: 16,
    textAlign: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    fontWeight: '100',
  }
});

export default NameDayInfo;
