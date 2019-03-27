import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, TextInput } from 'react-native';
import { Modal } from './ui';
import FaIcon from 'react-native-vector-icons/FontAwesome';

class AddNoteModal extends Component {

  state = {
    value: '',
  };

  handleInputChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { isVisible, onModalClose } = this.props;
    const { value } = this.state;

    return (
      <Modal
        visible={ isVisible }
        onRequestClose={ onModalClose }
        backgroundColor={ 'transparent' }
      >
        <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
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
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#26639a',
                }}
              >
                <TextInput
                  autoFocus
                  placeholder={ "Poznámka..." }
                  value={ value }
                  onChangeText={ this.handleInputChange }
                  style={{ color: '#000', marginHorizontal: 15, borderRadius: 10, backgroundColor: '#fff', flex: 1, height: 45, paddingHorizontal: 10 }}
                />
                <TouchableOpacity style={{ height: 45, alignItems: 'center', justifyContent: 'center', marginRight: 20 }}>
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
  onModalClose: PropTypes.func.isRequired,
};

export default AddNoteModal;