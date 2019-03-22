import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';
import { getDayName, getMonthName } from '../libs'

const DateInfo = () => (
  <View style={{
    justifyContent: 'center',
    marginTop: 20,
  }}>
    <Text style={{
      color: '#3ded88',
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
        color: '#fff',
        fontSize: 20,
      }}>
        {moment().format('D')}
      </Text>
      <Text style={{
        color: '#fff',
        fontSize: 20,
      }}>
        .
      </Text>
      <Text style={{
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
      }}>
        {` ${getMonthName()} `}
      </Text>
      <Text style={{
        color: '#fff',
        fontSize: 20,
      }}>
        {moment().format('YYYY')}
      </Text>
    </View>
  </View>
);
 
export default DateInfo;