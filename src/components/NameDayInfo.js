import React, { Component } from 'react';
import { Text, View } from 'react-native';
import data from '../data/namedays.json';

export default class NameDayInfo extends Component {

  getNameDay() {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();

    return data[month][day];
  }

 
  render() {

    return (
      <View style={{
        alignItems: 'center',
        marginHorizontal: 25,
        marginTop: 20,
      }}>
        <Text style={{
          color: '#fff',
          fontWeight: '500',
        }}>
          Meniny má
        </Text>
        <Text style={{
          color: '#fff',
          textAlign: 'center',
        }}>
          {this.getNameDay()}
        </Text>
      </View>
    );
  }
}


