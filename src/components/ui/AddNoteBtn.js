import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const AddNoteBtn = ({ onPress, isDay }) => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: isDay ? '#26639a' : '#3ded88',
      width: '90%',
      paddingVertical: 10,
      justifyContent: 'center',
      borderRadius: 10,
      borderWidth: 1,
      borderBottomWidth: 4
    }}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <FaIcon name={'plus'} color={ isDay ? '#fff' : '#000' } size={ 14 } />
    <Text style={{
      color: isDay ? '#fff' : '#000',
      marginLeft: 7,
      fontSize: 16
    }}>
      Pridať poznámku
    </Text>
  </TouchableOpacity>
);

AddNoteBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
  isDay: PropTypes.bool.isRequired,
};

export default AddNoteBtn;