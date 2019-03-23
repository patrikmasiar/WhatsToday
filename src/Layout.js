import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { NavBar } from './components/ui';
import Title from './components/Title';
import WeatherInfo from './components/WeatherInfo';
import NameDayInfo from './components/NameDayInfo';
import DateInfo from './components/DateInfo';
import { isDay } from './libs';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlacesModal from './components/PlacesModal';

const DAY_BG = require('./img/daybg.png');
const NIGHT_BG = require('./img/nightbg.png');

export default class Layout extends Component {

  state = {
    isPlacesModalShown: false,
    selectedPlace: null,
  };

  handleShowPlacesModal = () => {
    this.setState({ isPlacesModalShown: true });
  };

  handleHidePlacesModal = () => {
    this.setState({ isPlacesModalShown: false });
  };

  handleSelectPlace = (placeId) => {
    this.setState({
      selectedPlace: placeId,
      isPlacesModalShown: false,
    });
  };

  render() {
    const { isPlacesModalShown, selectedPlace } = this.state;

    return (
      <View style={{ flex: 1}}>
        <NavBar
          title={ <Title /> }
          rightButton={
            <TouchableOpacity
              activeOpacity={ 0.6 }
              style={{
                alignSelf: 'center',
                paddingHorizontal: 20,
              }}
              onPress={ this.handleShowPlacesModal }
            >
              <Icon name={ 'map-marker' } size={ 25 } color={ '#fff' } />
            </TouchableOpacity>
          }
        />
        <View style={{ position: 'relative', height: '100%', width: '100%' }}>
          <Image
            source={isDay() ? DAY_BG : NIGHT_BG}
            style={{
              flex: 1,
              height: '100%',
              width: '100%',
              resizeMode: 'cover',
              opacity: 1,
            }}
          />
          <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, width: '100%' }}>
            <DateInfo isDay={ isDay() } />
            <WeatherInfo isDay={ isDay() } selectedPlace={ selectedPlace } />
            <NameDayInfo isDay={ isDay() } />
          </View>
        </View>
        <PlacesModal
          isVisible={ isPlacesModalShown }
          onModalClose={ this.handleHidePlacesModal }
          isDay={ isDay() }
          onSelectPlace={ this.handleSelectPlace }
        />
      </View>
    );
  }
}