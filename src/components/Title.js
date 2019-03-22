import React from 'react';
import { Text } from 'react-native';
import { getTitleGreeting } from '../libs';
import moment from 'moment';

const Title = () => (
    <Text style={{ fontSize: 18, color: '#fff' }}>
      {getTitleGreeting(moment().format('HH'))}
    </Text>
);

export default Title;