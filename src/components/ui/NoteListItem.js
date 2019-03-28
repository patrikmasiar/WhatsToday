import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const NoteListItem = ({ message }) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#fff',
      //width: '100%',
      //paddingVertical: 15,
      //justifyContent: 'center',
      padding: 10,
      borderRadius: 10,
      elevation: 4,
      shadowOpacity: 0.6,
      shadowColor: '#000',
      shadowRadius: 6,
      shadowOffset: {
          height: 5,
      },
    }}
  >
    <Text style={{color: '#000'}}>
      {message}
    </Text>
  </View>
);

NoteListItem.propTypes = {
  message: PropTypes.string.isRequired
};

export default NoteListItem;