import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Box1, Box2, Box3 } from './components/boxes';

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
    // flexDirection: 'row'  // 가로 배치 원하면 주석 해제
  },
});

export default App;
