import React from 'react';
import { View, StyleSheet } from 'react-native';

// Box1
export const Box1 = ({ addstyle }) => {
  return <View style={[styles.box1, addstyle]} />;
};

// Box2
export const Box2 = ({ addstyle }) => {
  return <View style={[styles.box2, addstyle]} />;
};

// Box3
export const Box3 = ({ addstyle }) => {
  return <View style={[styles.box3, addstyle]} />;
};

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    backgroundColor: 'green',
  },
  box2: {
    flex: 4,
    backgroundColor: 'skyblue',
  },
  box3: {
    flex: 1,
    backgroundColor: 'blue',
  },
});
