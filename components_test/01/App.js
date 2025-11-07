import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style = {styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}>
        <Text style={styles.text}>안녕 !!!</Text>
      </View>
      <View style={styles.box3}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: 'white',
    //flexDirection: 'row'
  },
  box1: {
    flex: 1,
    backgroundColor: 'green',
  },
  box2: {
    flex: 4,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'blue',
  },
  text : {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
  }
});

export default App;
