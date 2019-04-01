import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const FullScreenLoader = () => (
  <View
    style={{
      flex: 1,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      borderRadius: 20,
    }}
  >
    <ActivityIndicator size={60} color='#26639a' />
  </View>
);

export default FullScreenLoader;