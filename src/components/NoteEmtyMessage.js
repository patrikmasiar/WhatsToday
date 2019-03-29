import React from 'react';
import { Text } from 'react-native';

const NoteEmptyMessage = () => (
  <Text style={{
    color: 'gray',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 16
  }}>
    Žiadne poznámky
  </Text>
);

export default NoteEmptyMessage;