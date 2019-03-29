import React from 'react';
import { Modal as ReactNativeModal, View } from 'react-native';
import PropTypes from 'prop-types';

const Modal = ({ visible, onRequestClose, children, backgroundColor, animationType }) =>
  (<ReactNativeModal
    visible={ visible }
    animationType={ animationType }
    hardwareAccelerated
    onRequestClose={ onRequestClose }
    transparent
  >
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      {children}
    </View>
  </ReactNativeModal>);

Modal.propTypes = {
  visible: PropTypes.bool,
  onRequestClose: PropTypes.func,
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  animationType: PropTypes.string,
};

export default Modal;