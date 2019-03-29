import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import moment from 'moment';
import { getDayName, getMonthName } from '../libs'
import PropTypes from 'prop-types';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const LIGHT_TEXT = '#fff';
const DARK_TEXT = '#000';

const DateInfo = ({ isDay, onSettingsPress }) => (
  <View style={{
    justifyContent: 'center',
    marginTop: 20,
  }}>
    <View style={{
      alignItems: 'flex-end',
      marginTop: 3,
      flexDirection: 'row',
    }}>
      <Text style={{
        color: isDay ? DARK_TEXT : LIGHT_TEXT,
        fontSize: 16,
      }}>
        {moment().format('D')}
      </Text>
      <Text style={{
        color: isDay ? DARK_TEXT : LIGHT_TEXT,
        fontSize: 16,
      }}>
        .
      </Text>
      <Text style={{
        color: isDay ? DARK_TEXT : LIGHT_TEXT,
        fontSize: 17,
      }}>
        {` ${getMonthName()} `}
      </Text>
      <Text style={{
        color: isDay ? DARK_TEXT : LIGHT_TEXT,
        fontSize: 16,
      }}>
        {moment().format('YYYY')}
      </Text>
      <TouchableOpacity
        style={{ marginLeft: 'auto' }}
        onPress={ onSettingsPress }
        hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
      >
        <FaIcon name={ 'cog' } size={ 25 } color={ isDay ? '#26639a' : '#3ded88' } />
      </TouchableOpacity>
    </View>
  </View>
);

DateInfo.propTypes = {
  isDay: PropTypes.bool.isRequired,
  onSettingsPress: PropTypes.func.isRequired
};
 
export default DateInfo;