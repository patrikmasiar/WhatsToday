import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import NavigationBar from 'react-native-navbar';

/* Component ==================================================================== */
class NavBar extends Component {
  navigationBarProps = () => {
    // Static props
    const props = {
      ...this.props,
      statusBar: {
        style: 'light-content',
      },
      containerStyle: {
        backgroundColor: '#26639a',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
          height: StyleSheet.hairlineWidth,
        },
        elevation: 4,
      },
      title: React.isValidElement(this.props.title)
        ? this.props.title
        : {
          title: this.props.title.title,
          tintColor: '#fff',
          style: {
            alignSelf: Platform.OS === 'android' ? 'flex-start' : 'center',
            marginHorizontal: 16,
            paddingLeft: Platform.OS === 'android' && this.props.leftButton ? 45 : 0,
          },
        },
    };

    return props;
  };

  render = () => <NavigationBar { ...this.navigationBarProps() } />;
}

export default NavBar;