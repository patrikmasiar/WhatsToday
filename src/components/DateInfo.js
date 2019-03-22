import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

const DateInfo = () => (
  <View style={{
    justifyContent: 'center',
    marginTop: 20,
  }}>
    <Text style={{
      color: '#fff',
      textAlign: 'center',
    }}>
      {moment().format('DD.MM.YYYY')}
    </Text>
  </View>
);
 
export default DateInfo;