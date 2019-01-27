//
import React, { Component } from 'react';
import { Text } from 'react-native';

export default class App extends Component {

  state = {
    weatherInfo: null,
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
      this.setState({ weatherInfo: parseFloat(responseJson.main.temp - 273.15).toFixed(1) });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Text style={{ color: '#3ded88' }}>
        {this.state.weatherInfo}
      </Text>
    );
  }
}


