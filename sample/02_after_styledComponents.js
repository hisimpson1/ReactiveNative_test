import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>안녕, StyleSheet!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff'
  },
  text : {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  }
});  
