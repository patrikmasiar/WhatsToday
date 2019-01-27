import React from 'react';
import { View, Text } from 'react-native';
import { NavBar } from './components/ui';

const Layout = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavBar
        title={<Text style={{ fontSize: 18, color: '#fff' }}>Today</Text>}
      />
    </View>
  );
};

export default Layout