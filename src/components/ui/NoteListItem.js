import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const NoteListItem = ({ message, isDay, onRemovePress }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      //width: '100%',
      //paddingVertical: 15,
      //justifyContent: 'center',
      borderWidth: isDay ? 0.8 : 0,
      borderColor: isDay ? '#f0f0f0' : 'transparent',
      padding: 10,
      borderRadius: 8,
      elevation: isDay ? 1 : 2,
      shadowOpacity: 0.6,
      shadowColor: '#000',
      shadowRadius: 2,
      shadowOffset: {
          height: isDay ? 0 : 2,
      },
      flexDirection: 'row',
    }}
  >
    <Text style={{color: '#000', paddingRight: 30}}>
      {message}
    </Text>
    <TouchableOpacity onPress={onRemovePress} style={{ marginTop: 1, alignSelf: 'flex-start', marginLeft: 'auto' }} hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
      <FaIcon name={ 'trash' } color={ "gray" } size={ 17 } />
    </TouchableOpacity>
  </View>
);

NoteListItem.propTypes = {
  message: PropTypes.string.isRequired,
  isDay: PropTypes.bool.isRequired,
  onRemovePress: PropTypes.func.isRequired,
};

export default NoteListItem;