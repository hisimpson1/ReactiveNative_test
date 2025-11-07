import React from 'react';
import { View, StyleSheet } from 'react-native';

const Box3 = (props) => {
  return <View style={[styles.box, props.style]} />;
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

export default Box3;
