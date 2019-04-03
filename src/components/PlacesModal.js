import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavBar, Modal, NavbarButton } from './ui';
import PlacesModalBody from './PlacesModalBody';

class PlacesModal extends Component {

  render() {
    const { isDay, isVisible, onModalClose, onSelectPlace } = this.props;

    return (
      <Modal
        visible={ isVisible }
        onRequestClose={ onModalClose }
        backgroundColor={ isDay ? '#d0f1ff' : '#194a75' }
        animationType={ "slide" }
      >
        <NavBar
          title={{
            title: 'Nastaviť mesto'
          }}
          rightButton={ <NavbarButton iconName={ 'times' } onPress={ onModalClose } /> }
        />
        <PlacesModalBody isDay={ isDay } onSelectPlace={ onSelectPlace } />
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

export default PlacesModal;