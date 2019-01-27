import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class App extends Component {

  state = {
    degrees: null,
    city: null
  };

  componentDidMount() {
    this.loadWeatherInfo();
  }

  loadWeatherInfo = async () => {
    try {
      let response = await fetch(
        'http://api.openweathermap.org/data/2.5/weather?id=3058498&appid=88e3301da7aca86544ed0acdea1b14f0',
      );
      let responseJson = await response.json();
      this.setState({
        degrees: parseFloat(responseJson.main.temp - 273.15).toFixed(1),
        city: responseJson.name
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {

    return (
      <View style={{
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderWidth: 0.5,
        borderColor: 'rgba(255,255,255,0.2)',
        marginHorizontal: 25,
        paddingVertical: 15,
        borderRadius: 10
      }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: '#fff', fontSize: 40, fontWeight: '100' }}>
            {this.state.degrees !== null && `${this.state.degrees}`}
          </Text>
          <Text style={{ color: '#3ded88', fontSize: 40, fontWeight: '100' }}>
            {this.state.degrees !== null && '°C'}
          </Text>
        </View>
        <Text style={{ color: '#fff', fontSize: 15 }}>
          {this.state.city}
        </Text>
      </View>
    );
  }
}


