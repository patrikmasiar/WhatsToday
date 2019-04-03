import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, TextInput, Alert, Keyboard, StyleSheet } from 'react-native';
import { Modal } from './ui';
import FaIcon from 'react-native-vector-icons/FontAwesome';

const HIT_SLOP = {top: 20, right: 20, left: 15, bottom: 20};

class AddNoteModal extends Component {

  handleSubmit = () => {
    if (this.props.value.length === 0) {
      Alert.alert('Zadajte poznámku');
      return false;
    }

    Keyboard.dismiss();
    this.props.onSubmit();
  }

  handleModalClose = () => {
    Keyboard.dismiss();
    this.props.onModalClose();
  }

  render() {
    const { isVisible, onModalClose, value, onValueChange } = this.props;

    return (
      <Modal
        visible={ isVisible }
        onRequestClose={ onModalClose }
        backgroundColor={ 'transparent' }
        animationType={ "fade" }
      >
        <View style={style.wrapper}>
            <TouchableOpacity onPress={this.handleModalClose} style={{ flex: 1 }} activeOpacity={0} />
            <View style={style.fieldWrapper}>
              <View style={style.innerFieldWrapper}>
                <TextInput
                  autoFocus
                  multiline={true}
                  placeholder={ "Poznámka..." }
                  value={ value }
                  onChangeText={ value => onValueChange(value) }
                  style={style.field}
                  textAlignVertical={'top'}
                />
                <TouchableOpacity hitSlop={HIT_SLOP} onPress={this.handleSubmit} style={style.sendBtn}>
                  <FaIcon name={ 'paper-plane' } color={ 'white' } size={ 25 } />
                </TouchableOpacity>
              </View>
            </View>
        </View>
      </Modal>
    );
  }
}

AddNoteModal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
};

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  fieldWrapper: {
    paddingVertical: 7,
    elevation: 10,
    shadowOpacity: 0.6,
    shadowColor: '#000',
    shadowRadius: 6,
    shadowOffset: {
        height: 5,
    },
    backgroundColor: '#26639a',
  },
  innerFieldWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26639a',
  },
  field: {
    elevation: 10,
    shadowOpacity: 0.6,
    shadowColor: '#000',
    shadowRadius: 6,
    shadowOffset: {
        height: 5,
    },
    color: '#000',
    marginHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#fff',
    flex: 1,
    minHeight: 45,
    maxHeight: 160,
    padding: 20,
    minHeight: 80,
  },
  sendBtn: {
    height: 45,
    alignSelf: 'flex-end',
    marginRight: 20
  }
})

export default AddNoteModal;