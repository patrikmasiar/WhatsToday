import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { NavBar } from './components/ui';
import Title from './components/Title';
import WeatherInfo from './components/WeatherInfo';
import NameDayInfo from './components/NameDayInfo';
import DateInfo from './components/DateInfo';
import { isDay } from './libs';
import PlacesModal from './components/PlacesModal';
import store from './store/store';
import { setWeatherCity, addToNote, deleteNote } from './store/actions';
import { connect } from 'react-redux';
import Notes from './components/Notes';
import AddNoteModal from './components/AddNoteModal';

const DAY_BG = '#f3fbff';
const NIGHT_BG = '#193F69';

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

  handleRemoveNote = (noteId) => {
    store.dispatch(deleteNote({
      id: noteId,
    }));
  };

  render() {
    const { isPlacesModalShown, isNoteModalShown } = this.state;

    return (
      <View style={{flex: 1}}>
        <NavBar
          title={ <Title /> }
        />
        <ScrollView style={{ backgroundColor: isDay() ? DAY_BG : NIGHT_BG, flex: 1, paddingHorizontal: 10 }}>
          <DateInfo isDay={ isDay() } onSettingsPress={ this.handleShowPlacesModal } />
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
            onRemovePress={ this.handleRemoveNote }
          />
          <View style={{ height: 30, backgroundColor: 'transparent' }} />
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