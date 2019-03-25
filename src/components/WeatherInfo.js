import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from '../libs/weatherIcon';
import weatherIcons from '../data/icons.json';
import PropTypes from 'prop-types';
import { getCityName } from '../libs';

export default class WeatherInfo extends Component {

  state = {
    degrees: null,
    city: null,
    icon: null,
  };

  componentDidMount() {
    this.loadWeatherInfo();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedPlace !== nextProps.selectedPlace) {
      this.loadWeatherInfo(nextProps.selectedPlace);
    }
  }

  loadWeatherInfo = async (selectedPlace = 3060972) => {
    if (selectedPlace !== null) {

      try {
        let response = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?id=${selectedPlace}&appid=88e3301da7aca86544ed0acdea1b14f0`,
        );
        let responseJson = await response.json();
        this.setState({
          degrees: parseFloat(responseJson.main.temp - 273.15).toFixed(1),
          city: getCityName(selectedPlace),
          icon: responseJson.weather[0].id,
        });
      } catch (error) {
        console.error(error);
      }
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
        //marginTop: 20,
        paddingBottom: 15,
        borderRadius: 20,
      }}>
        <Text style={{ color: isDay ? '#000' : '#fff', fontSize: 35, marginTop: 8, fontWeight: '500' }}>
          {this.state.city}
        </Text>
        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
          <Icon name={this.getIcon()} style={{ color: isDay ? '#26639a' : '#fff', fontSize: 180 }} />
          <Text style={{ color: isDay ? '#000' : '#fff', fontSize: 50, fontWeight: '100', marginLeft: 10, opacity: 0.9 }}>
            {this.state.degrees !== null ? `${this.state.degrees}` : '--.-'}
          </Text>
          <Text style={{ color: isDay ? '#26639a' : '#3ded88', fontSize: 50, fontWeight: '100' }}>
            °C
          </Text>
        </View>
      </View>
    );
  }
}

WeatherInfo.propTypes = {
  isDay: PropTypes.bool.isRequired,
};
