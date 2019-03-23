import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from '../libs/weatherIcon';
import FaIcon from 'react-native-vector-icons/FontAwesome';
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
    const { isDay, onSettingsPress } = this.props;

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
          backgroundColor: '#26639a',
          borderRadius: 60,
          borderWidth: 0.5,
          borderColor: 'rgba(255,255,255,0.2)',
          top: -35,
          padding: 5
        }}>
          <Icon name={this.getIcon()} style={{ color: 'white', fontSize: 80 }} />
        </View>
        <TouchableOpacity
          style={{ position: 'absolute', top: 10, right: 15 }}
          onPress={ onSettingsPress }
          hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
        >
          <FaIcon name={ 'cog' } size={ 25 } color={ '#fff' } />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text style={{ color: '#fff', fontSize: 50, fontWeight: '100' }}>
            {this.state.degrees !== null ? `${this.state.degrees}` : '--.-'}
          </Text>
          <Text style={{ color: isDay ? '#26639a' : '#3ded88', fontSize: 50, fontWeight: '100' }}>
            °C
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
  onSettingsPress: PropTypes.func.isRequired,
};
