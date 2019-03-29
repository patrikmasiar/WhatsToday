import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const AddNoteBtn = ({ onPress, isDay }) => (
  <TouchableOpacity
    style={[style.wrapper, !isDay && style.wrapperNight]}
    onPress={onPress}
    activeOpacity={0.8}
  >
    <FaIcon name={'plus'} color={ isDay ? '#fff' : '#000' } size={ 14 } />
    <Text style={[style.label, !isDay && style.labelNight]}>
      Pridať poznámku
    </Text>
  </TouchableOpacity>
);

AddNoteBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
  isDay: PropTypes.bool.isRequired,
};

const style = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#26639a',
    width: '100%',
    paddingVertical: 15,
    justifyContent: 'center',
    borderRadius: 40,
    elevation: 4,
    shadowOpacity: 0.6,
    shadowColor: '#000',
    shadowRadius: 6,
    shadowOffset: {
        height: 5,
    },
  },
  wrapperNight: {
    backgroundColor: '#3ded88',
  },
  label: {
    color: '#fff',
    marginLeft: 7,
    fontSize: 16
  },
  labelNight: {
    color: '#000',
  }
});

export default AddNoteBtn;