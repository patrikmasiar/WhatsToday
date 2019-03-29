import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import AddNoteBtn from './ui/AddNoteBtn';
import NoteListItem from './ui/NoteListItem';
import NoteEmptyMessage from './ui/NoteEmtyMessage';

class Notes extends Component {

  render() {
    const {isDay, onAddNotePress, notes, onRemovePress} = this.props;

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
          },
          paddingHorizontal: 15,
        }}
      >
        <AddNoteBtn isDay={ isDay } onPress={ onAddNotePress } />
        <FlatList
          scrollEnabled={false}
          style={{marginTop: 20, width: '100%', paddingBottom: 10}}
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <NoteListItem
              message={item.item.text}
              isDay={isDay}
              onRemovePress={onRemovePress.bind(this, item.item.id)}
            />
          )}
          ListEmptyComponent={() => <NoteEmptyMessage />}
        />
      </View>
    );
  }
}

Notes.propTypes = {
  onAddNotePress: PropTypes.func.isRequired,
  isDay: PropTypes.bool.isRequired,
  onRemovePress: PropTypes.func.isRequired,
};

export default Notes;