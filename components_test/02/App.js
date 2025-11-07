import React from 'react';
import { View, StyleSheet } from 'react-native';
import Box1 from './components/box1';
import Box2 from './components/box2';
import Box3 from './components/box3';

const App = () => {
  return (
    <View style={styles.container}>
      <Box1 />
      <Box2 />
      <Box3 />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // flexDirection: 'row'  // 필요시 주석 해제
  },
});

export default App;
