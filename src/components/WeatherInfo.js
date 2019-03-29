import React, { Component } from 'react';
import { Text, View, NetInfo } from 'react-native';
import Icon from '../libs/weatherIcon';
import weatherIcons from '../data/icons.json';
import PropTypes from 'prop-types';
import { getCityName } from '../libs';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class WeatherInfo extends Component {

  state = {
    degrees: null,
    city: null,
    icon: null,
    max: null,
    min: null,
  };

  componentDidMount() {
    NetInfo.addEventListener('connectionChange', this.handleConnectionChange);
  }

  componentWillUnmount() {
    NetInfo.removeEventListener('connectionChange', this.handleConnectionChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.selectedPlace !== nextProps.selectedPlace) {
      this.loadWeatherInfo(nextProps.selectedPlace);
    }
  }

  handleConnectionChange = (event) => {
    console.log('CONNECTION CHANGED:', event);
    if ( event.effectiveType !== null ) {
      if ( event.type === 'wifi' || event.type === 'cellular' ) {
        this.loadWeatherInfo();
      }
    }
  };

  loadWeatherInfo = async (selectedPlace = null) => {
      if (selectedPlace !== null) {
        try {
          let response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?id=${selectedPlace}&appid=88e3301da7aca86544ed0acdea1b14f0`,
          );
          let responseJson = await response.json();
          this.setState({
            degrees: parseFloat(responseJson.main.temp - 273.15).toFixed(1),
            max: parseFloat(responseJson.main.temp_max - 273.15).toFixed(1),
            min: parseFloat(responseJson.main.temp_min - 273.15).toFixed(1),
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
    if (this.state.icon === null) {
      return null;
    }

    const code = this.state.icon;
    let icon = weatherIcons[code].icon;

    if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
      icon = 'wi-day-'+ icon;
    } else {
      icon = prefix + icon;
    }

    return icon;
  }

  render() {
    const { icon } = this.state;
    const { isDay } = this.props;

    return (
      <View style={{
        paddingBottom: 15,
        borderRadius: 20,
        alignItems: 'center',
      }}>
        <Text style={{ color: isDay ? '#000' : '#fff', fontSize: 35, marginHorizontal: 5, marginTop: 8, fontWeight: '500', alignSelf: 'flex-start' }}>
          {this.state.city}
        </Text>
        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
          {icon !== null && (
            <Icon name={this.getIcon()} style={{ color: isDay ? '#26639a' : '#fff', fontSize: 160 }} />
          )}
          <Text style={{ color: isDay ? '#000' : '#fff', fontSize: 45, fontWeight: '100', opacity: 0.9 }}>
            {this.state.degrees !== null ? `${this.state.degrees}` : '--.-'}
          </Text>
          <Text style={{ color: isDay ? '#26639a' : '#3ded88', fontSize: 45, fontWeight: '100' }}>
            °C
          </Text>
          <View style={{ flexDirection: 'row', position: 'absolute', bottom: 35, right: 0 }}>
            {this.state.max !== null && (
              <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                <FaIcon name={'arrow-up'} color={ isDay ? '#26639a' : '#3ded88' } />
                <Text style={{ color: isDay ? '#000' : '#fff', marginLeft: 5 }}>
                  {`${this.state.max}°C`}
                </Text>
              </View>
            )}
            {this.state.min !== null && (
              <View style={{ flexDirection: 'row',  alignItems: 'center' }}>
                <FaIcon name={'arrow-down'} color={ isDay ? '#26639a' : '#3ded88' } />
                <Text style={{ color: isDay ? '#000' : '#fff', marginLeft: 5 }}>
                  {`${this.state.min}°C`}
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    );
  }
}

WeatherInfo.propTypes = {
  isDay: PropTypes.bool.isRequired,
};

export default WeatherInfo;
