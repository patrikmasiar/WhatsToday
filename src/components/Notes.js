import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, StyleSheet } from 'react-native';
import AddNoteBtn from './AddNoteBtn';
import NoteListItem from './NoteListItem';
import NoteEmptyMessage from './NoteEmtyMessage';

class Notes extends Component {

  render() {
    const {isDay, onAddNotePress, notes, onRemovePress, onItemPress } = this.props;

    return (
      <View style={[ style.wrapper, !isDay && style.wrapperNight ]}>
        <AddNoteBtn isDay={ isDay } onPress={ onAddNotePress } />
        <FlatList
          scrollEnabled={ false }
          style={ style.list }
          data={ notes }
          keyExtractor={(item, index) => index.toString()}
          renderItem={item => (
            <NoteListItem
              message={ item.item.text }
              isDay={ isDay }
              onRemovePress={onRemovePress.bind(this, item.item.id)}
              onItemPress={onItemPress.bind(this, item.item.id, item.item.text)}
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
  onItemPress: PropTypes.func.isRequired,
};

const style = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 15,
    marginHorizontal: 5,
    marginTop: 10,
    borderRadius: 20,
    elevation: 3,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      height: 4,
    },
    paddingHorizontal: 15,
  },
  wrapperNight: {
    backgroundColor: '#194a75',
  },
  list: {
    marginTop: 20,
    width: '100%',
    paddingBottom: 10,
  },
});

export default Notes;