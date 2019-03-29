import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, TextInput, Alert, Keyboard } from 'react-native';
import { Modal } from './ui';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class AddNoteModal extends Component {

  state = {
    value: '',
  };

  handleInputChange = (value) => {
    this.setState({ value });
  };

  handleSubmit = () => {
    if (this.state.value.length === 0) {
      Alert.alert('Zadajte poznámku');
      return false;
    }

    Keyboard.dismiss();
    this.setState({value: ''});
    this.props.onSubmit(this.state.value);
  }

  handleModalClose = () => {
    Keyboard.dismiss();
    this.setState({value: ''});
    this.props.onModalClose();
  }

  render() {
    const { isVisible, onModalClose } = this.props;
    const { value } = this.state;

    return (
      <Modal
        visible={ isVisible }
        onRequestClose={ onModalClose }
        backgroundColor={ 'transparent' }
        animation="fade"
      >
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }}>
            <TouchableOpacity onPress={this.handleModalClose} style={{ flex: 1 }} activeOpacity={0} />
            <View
              style={{
                paddingVertical: 7,
                elevation: 10,
                shadowOpacity: 0.6,
                shadowColor: '#000',
                shadowRadius: 6,
                shadowOffset: {
                    height: 5,
                },
                backgroundColor: '#26639a',
                borderTopWidth: 1,
                borderTopColor: 'lightgray',
              }}
            >
              <View 
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#26639a',
                }}
              >
                <TextInput
                  autoFocus
                  multiline={true}
                  placeholder={ "Poznámka..." }
                  value={ value }
                  onChangeText={ this.handleInputChange }
                  style={{
                    elevation: 10,
                shadowOpacity: 0.6,
                shadowColor: '#000',
                shadowRadius: 6,
                shadowOffset: {
                    height: 5,
                },color: '#000', marginHorizontal: 15, borderRadius: 40, backgroundColor: '#fff', flex: 1, minHeight: 45, maxHeight: 150, padding: 10 }}
                />
                <TouchableOpacity hitSlop={{top: 20, right: 20, left: 15, bottom: 20}} onPress={this.handleSubmit} style={{ height: 45, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
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
};

export default AddNoteModal;