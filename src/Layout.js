import React, { Component } from 'react';
import { ScrollView, View, Alert, TouchableOpacity } from 'react-native';
import { NavBar, NavbarButton } from './components/ui';
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
    noteValue: '',
  };

  handleShowPlacesModal = () => {
    this.setState({ isPlacesModalShown: true });
  };

  handleHidePlacesModal = () => {
    this.setState({ isPlacesModalShown: false });
  };

  handleNoteValueChange = (value) => {
    this.setState({ noteValue: value });
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
    this.setState({ isNoteModalShown: false, noteValue: '' });
  };

  handleNotePress = (id, text) => {
    this.setState({
      isNoteModalShown: true,
      noteIdForEdit: id,
      noteValue: text,
    });
  };

  handleAddNewNote = () => {
    store.dispatch(addToNote({
      text: this.state.noteValue,
      createdAt: new Date(),
    }));
    this.handleAddNoteModalHide();
  };

  handleRemoveNote = (noteId) => {
    Alert.alert(
      'Vymazať poznámku?',
      'Naozaj si želáte vymazať poznámku?',
      [
        {
          text: 'Zrušiť',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'Vymazať', onPress: () => store.dispatch(deleteNote({
          id: noteId,
        }))},
      ],
      {cancelable: false},
    );
    
  };

  render() {
    const { isPlacesModalShown, isNoteModalShown, noteValue } = this.state;

    return (
      <View style={{flex: 1}}>
        <NavBar
          title={ <Title /> }
          rightButton={ <NavbarButton iconName={ 'cog' } onPress={ this.handleShowPlacesModal } /> }
        />
        <ScrollView style={{ backgroundColor: isDay() ? DAY_BG : NIGHT_BG, flex: 1, paddingHorizontal: 10 }}>
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
            onRemovePress={ this.handleRemoveNote }
            onItemPress={ this.handleNotePress }
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
          value={ noteValue }
          onValueChange={ this.handleNoteValueChange }
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