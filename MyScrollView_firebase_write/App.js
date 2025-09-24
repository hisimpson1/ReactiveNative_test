import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {NavigationContainer} from '@react-navigation/native';
import MyStackNavigator from './mynavigation/MyStackNavigator'

export default function App() {

  console.disableYellowBox = true;

  return ( 
  <NavigationContainer>
    <StatusBar style="black" />
    <MyStackNavigator/>
 </NavigationContainer>);
}