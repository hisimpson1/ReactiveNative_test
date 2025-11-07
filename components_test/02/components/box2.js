import React from 'react';
import { View, StyleSheet } from 'react-native';

const Box2 = (props) => {
  return <View style={[styles.box, props.style]} />;
};

const styles = StyleSheet.create({
  box: {
    flex: 4,
    backgroundColor: 'skyblue',
  },
});

export default Box2;
