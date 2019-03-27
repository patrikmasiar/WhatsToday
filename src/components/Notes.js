import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import AddNoteBtn from './ui/AddNoteBtn';

class Notes extends Component {

  render() {
    const {isDay, onAddNotePress} = this.props;

    return (
      <View
        style={{
          alignItems: 'center',
          backgroundColor: isDay ? '#fff' : '#194a75',
          paddingVertical: 15,
          marginTop: 10,
          borderRadius: 20,
          elevation: 3,
          shadowOpacity: 1,
          shadowRadius: 4,
          shadowOffset: {
            height: 4,
          }
        }}
      >
        <AddNoteBtn isDay={ isDay } onPress={ onAddNotePress } />
      </View>
    );
  }
}

Notes.propTypes = {
  onAddNotePress: PropTypes.func.isRequired,
  isDay: PropTypes.bool.isRequired,
};

export default Notes;