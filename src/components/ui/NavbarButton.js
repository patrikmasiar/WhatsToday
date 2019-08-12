import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const NavbarButton = ({onPress, iconName}) => (
  <TouchableOpacity
    style={style.wrapper}
    onPress={onPress}
    hitSlop={{top: 15, bottom: 15, left: 15, right: 15}}
  >
    <FaIcon name={iconName} size={20} color='#fff' />
  </TouchableOpacity>
);

const style = StyleSheet.create({
  wrapper: {
    alignSelf: 'center',
    paddingHorizontal: 20, 
  },
});

NavbarButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default NavbarButton;