import React, { Component } from 'react';
import { ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { NavBar } from './components/ui';
import Title from './components/Title';
import WeatherInfo from './components/WeatherInfo';
import NameDayInfo from './components/NameDayInfo';
import DateInfo from './components/DateInfo';
import { isDay } from './libs';
import PlacesModal from './components/PlacesModal';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import store from './store/store';
import { setWeatherCity, addToNote } from './store/actions';
import { connect } from 'react-redux';
import Notes from './components/Notes';
import AddNoteModal from './components/AddNoteModal';

const DAY_BG = require('./img/daybg.png');
const NIGHT_BG = require('./img/nightbg.png');

class Layout extends Component {

  state = {
    isPlacesModalShown: false,
    isNoteModalShown: false,
  };

  handleShowPlacesModal = () => {
    this.setState({ isPlacesModalShown: true });
  };

  handleHidePlacesModal = () => {
    this.setState({ isPlacesModalShown: false });
  };

  handleSelectPlace = (placeId) => {
    store.dispatch(setWeatherCity({
      city: placeId,
    }));
    this.setState({
      isPlacesModalShown: false,
    });
  };

  handleAddNoteModalShow = () => {
    this.setState({ isNoteModalShown: true });
  };

  handleAddNoteModalHide = () => {
    this.setState({ isNoteModalShown: false });
  };

  handleAddNewNote = (note) => {
    store.dispatch(addToNote({
      text: note,
      createdAt: new Date(),
    }));
    this.handleAddNoteModalHide();
  };

  render() {
    const { isPlacesModalShown, isNoteModalShown } = this.state;

    return (
      <View style={{flex: 1}}>
        <NavBar
          title={ <Title /> }
        />
        <ScrollView contentContainerStyle={{ flex: 1 }}>
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
          <View style={{ flex: 1, position: 'absolute', top: 0, left: 0, width: '100%', paddingHorizontal: 15 }}>
            <DateInfo isDay={ isDay() } />
            <WeatherInfo
              isDay={ isDay() }
              selectedPlace={ this.props.city }
              onSettingsPress={ this.handleShowPlacesModal }
            />
            <NameDayInfo isDay={ isDay() } />
            <Notes
              isDay={ isDay() }
              onAddNotePress={ this.handleAddNoteModalShow }
              notes={ this.props.notes }
            />
          </View>
          <TouchableOpacity
            style={{ position: 'absolute', top: 20, right: 15 }}
            onPress={ this.handleShowPlacesModal }
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
          >
            <FaIcon name={ 'cog' } size={ 25 } color={ isDay() ? '#26639a' : '#3ded88' } />
          </TouchableOpacity>
        </ScrollView>
        <PlacesModal
          isVisible={ isPlacesModalShown }
          onModalClose={ this.handleHidePlacesModal }
          isDay={ isDay() }
          onSelectPlace={ this.handleSelectPlace }
        />
        <AddNoteModal
          isVisible={ isNoteModalShown }
          onModalClose={ this.handleAddNoteModalHide }
          onSubmit={this.handleAddNewNote}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  city: state.city.city,
  notes: state.notes.notes
});

export default connect(mapStateToProps)(Layout);