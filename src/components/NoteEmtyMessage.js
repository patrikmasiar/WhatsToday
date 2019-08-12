import React from 'react';
import {Text, StyleSheet} from 'react-native';

const NoteEmptyMessage = () => (
  <Text style={style.title}>
    Žiadne poznámky
  </Text>
);

const style = StyleSheet.create({
  title: {
    color: 'gray',
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 16
  },
});

export default NoteEmptyMessage;