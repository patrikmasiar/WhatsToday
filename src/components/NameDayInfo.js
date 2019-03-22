import React, { Component } from 'react';
import { Text, View } from 'react-native';
import data from '../data/namedays.json';

export default class NameDayInfo extends Component {

  getNameDay() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();

    const names = data[month][day].split(',');
    return names.slice(0, 2).join(', ');
  }

 
  render() {

    return (
      <View style={{
        justifyContent: 'center',
        marginHorizontal: 25,
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
          {` ${this.getNameDay()}`}
        </Text>
      </View>
    );
  }
}


