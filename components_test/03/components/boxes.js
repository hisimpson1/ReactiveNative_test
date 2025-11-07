import React from 'react';
import { View, StyleSheet } from 'react-native';

// Box1 컴포넌트
export const Box1 = (props) => {
  return <View style={[styles.box1, props.style]} />;
};

// Box2 컴포넌트
export const Box2 = (props) => {
  return <View style={[styles.box2, props.style]} />;
};

// Box3 컴포넌트
export const Box3 = (props) => {
  return <View style={[styles.box3, props.style]} />;
};

// 공통 스타일
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
