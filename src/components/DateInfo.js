import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import { getDayName, getMonthName } from '../libs'
import PropTypes from 'prop-types';

const LIGHT_TEXT = '#fff';
const DARK_TEXT = '#000';

const DateInfo = ({ isDay }) => (
  <View style={{
    justifyContent: 'center',
    marginTop: 20,
  }}>
    <Text style={{
      color: isDay ? '#26639a' : '#3ded88',
      alignSelf: 'center',
      fontSize: 16,
      fontWeight: '500',
    }}>
      {getDayName()}
    </Text>
    <View style={{
      justifyContent: 'center',
      alignItems: 'flex-end',
      marginTop: 3,
      flexDirection: 'row',
    }}>
      <Text style={{
        color: isDay ? DARK_TEXT : LIGHT_TEXT,
        fontSize: 18,
      }}>
        {moment().format('D')}
      </Text>
      <Text style={{
        color: isDay ? DARK_TEXT : LIGHT_TEXT,
        fontSize: 18,
      }}>
        .
      </Text>
      <Text style={{
        color: isDay ? DARK_TEXT : LIGHT_TEXT,
        fontSize: 20,
        fontWeight: '500',
      }}>
        {` ${getMonthName()} `}
      </Text>
      <Text style={{
        color: isDay ? DARK_TEXT : LIGHT_TEXT,
        fontSize: 18,
      }}>
        {moment().format('YYYY')}
      </Text>
    </View>
  </View>
);

DateInfo.propTypes = {
  isDay: PropTypes.bool.isRequired,
};
 
export default DateInfo;