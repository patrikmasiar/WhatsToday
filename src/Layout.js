import React from 'react';
import { View } from 'react-native';
import { NavBar, Title } from './components/ui';

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar
        title={<Title />}
      />
    </View>
  );
};

export default Layout