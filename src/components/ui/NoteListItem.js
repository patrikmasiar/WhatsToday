import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const NoteListItem = ({ message, isDay }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      //width: '100%',
      //paddingVertical: 15,
      //justifyContent: 'center',
      borderWidth: isDay ? 0.6 : 0,
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
    }}
  >
    <Text style={{color: '#000'}}>
      {message}
    </Text>
  </View>
);

NoteListItem.propTypes = {
  message: PropTypes.string.isRequired,
  isDay: PropTypes.bool.isRequired,
};

export default NoteListItem;