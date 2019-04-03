import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const NavbarButton = ({ onPress, iconName }) => (
  <TouchableOpacity
    style={{
      alignSelf: 'center',
      paddingHorizontal: 20,
    }}
    onPress={ onPress }
    hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
  >
    <FaIcon name={ iconName } size={ 20 } color={ '#fff' } />
  </TouchableOpacity>
);

NavbarButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  iconName: PropTypes.string.isRequired,
};

export default NavbarButton;