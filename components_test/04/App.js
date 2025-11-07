import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Box1, Box2, Box3 } from './components/boxes';

const App = () => {
  return (
    <View style={styles.container}>
      {/* 1. 기존 스타일 유지 + 추가 스타일 */}
      <Box1 addstyle={{ borderWidth: 2, borderColor: 'yellow' }} />

      {/* 2. 기존 스타일 덮어쓰기 (예: 색상 변경) */}
      <Box2 addstyle={{ backgroundColor: 'pink' }} />

      {/* 3. 여러 스타일 조합 (객체 배열 가능) */}
      <Box3 addstyle={[styles.customBorder, { opacity: 0.8 }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  customBorder: {
    borderWidth: 4,
    borderColor: 'red',
  },
});

export default App
