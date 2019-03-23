import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { NavBar, Modal } from './ui';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlacesModalBody from './PlacesModalBody';

export default class PlacesModal extends Component {

  render() {
    const { isDay, isVisible, onModalClose, onSelectPlace } = this.props;

    return (
      <Modal
        visible={ isVisible }
        onRequestClose={ onModalClose }
        backgroundColor={ '#fff' }
      >
        <NavBar
          title={{
            title: 'Nastaviť mesto'
          }}
          rightButton={
            <TouchableOpacity
              activeOpacity={ 0.6 }
              style={{
                alignSelf: 'center',
                paddingHorizontal: 20,
              }}
              onPress={ onModalClose }
            >
              <Icon name={ 'times' } size={ 25 } color={ '#fff' } />
            </TouchableOpacity>
          }
        />
        <PlacesModalBody onSelectPlace={ onSelectPlace } />
      </Modal>
    );
  }
}

PlacesModal.propTypes = {
  isDay: PropTypes.bool.isRequired,
  isVisible: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
  onSelectPlace: PropTypes.func.isRequired,
};
