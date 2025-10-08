import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../mypages/MyMainPage';
import DetailPage from '../mypages/MyDetailPage';

const Stack = createStackNavigator();


const MyStackNavigator = () =>{
    return (

        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                    height:100
                },
                headerTitleAlign:'left',
                headerTintColor: "#000",
                headerShown:false,
                headerBackTitleVisible: false
            }}
            
        >
            <Stack.Screen name="MainPage" component={MainPage}/>
            <Stack.Screen name="DetailPage" component={DetailPage}/>
        </Stack.Navigator>
    )
}

export default MyStackNavigator;