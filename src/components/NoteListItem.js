import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const NoteListItem = ({message, isDay, onRemovePress, onItemPress}) => (
  <TouchableOpacity
    style={[style.wrapper, {
      borderWidth: isDay ? 0.8 : 0,
      borderColor: isDay ? '#f0f0f0' : 'transparent',
      elevation: isDay ? 1 : 2,
    }]}
    activeOpacity={0.9}
    onPress={onItemPress}
  >
    <Text selectable selectionColor='#B3E5FC' style={style.message}>
      {message}
    </Text>
    <TouchableOpacity
      onPress={onRemovePress}
      style={style.btn}
      hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}
    >
      <FaIcon name='trash' color="#D32F2F" size={ 18 } />
    </TouchableOpacity>
  </TouchableOpacity>
);

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 10
  },
  message: {
    color: '#000',
    paddingRight: 30
  },
  btn: {
    marginTop: 1,
    alignSelf: 'flex-start',
    marginLeft: 'auto'
  },
});

NoteListItem.propTypes = {
  message: PropTypes.string.isRequired,
  isDay: PropTypes.bool.isRequired,
  onRemovePress: PropTypes.func.isRequired,
  onItemPress: PropTypes.func.isRequired,
};

export default NoteListItem;