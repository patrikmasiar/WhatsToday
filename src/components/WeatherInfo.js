import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from '../libs/weatherIcon';
import weatherIcons from '../data/icons.json';
import PropTypes from 'prop-types';

export default class WeatherInfo extends Component {

  state = {
    degrees: null,
    city: null,
    icon: null,
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
        city: responseJson.name,
        icon: responseJson.weather[0].id,
      });
    } catch (error) {
      console.error(error);
    }
  };

  getIcon() {
    const prefix = 'wi-';
    const code = this.state.icon !== null ? this.state.icon : 200;
    let icon = weatherIcons[code].icon;

    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = 'wi-day-'+ icon;
    } else {
      icon = prefix + icon;
    }

    return icon;
  }

  render() {
    const { isDay } = this.props;

    return (
      <View style={{
        alignItems: 'center',
        backgroundColor: isDay ? 'rgba(38,99,154,0.3)' : 'rgba(0,0,0,0.2)',
        borderWidth: 0.5,
        borderColor: 'rgba(255,255,255,0.3)',
        marginHorizontal: 25,
        marginTop: 60,
        paddingTop: 55,
        paddingBottom: 15,
        borderRadius: 20,
        position: 'relative'
      }}>
        <View style={{
          position: 'absolute',
          backgroundColor: isDay ? '#26639a' : '#42229d',
          borderRadius: 60,
          borderWidth: 0.5,
          borderColor: 'rgba(255,255,255,0.2)',
          top: -35,
          padding: 5
        }}>
          <Icon name={this.getIcon()} style={{ color: 'white', fontSize: 80 }} />
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={{ color: '#fff', fontSize: 50, fontWeight: '100' }}>
            {this.state.degrees !== null && `${this.state.degrees}`}
          </Text>
          <Text style={{ color: isDay ? '#26639a' : '#3ded88', fontSize: 50, fontWeight: '100' }}>
            {this.state.degrees !== null && '°C'}
          </Text>
        </View>
        <Text style={{ color: '#fff', fontSize: 17, marginTop: 8 }}>
          {this.state.city}
        </Text>
      </View>
    );
  }
}

WeatherInfo.propTypes = {
  isDay: PropTypes.bool.isRequired,
};
