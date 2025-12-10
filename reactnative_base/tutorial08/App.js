import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>홈 화면</Text>
      <Button
        title="상세 화면으로 이동 (데이터 전달)"
        onPress={() =>
          navigation.navigate('Details', {
            userName: '홍길동',
            age: 25,
          })
        }
      />
    </View>
  );
}

function DetailsScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  const { userName, age } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>상세 화면</Text>
      {userName && <Text>이름: {userName}</Text>}
      {age && <Text>나이: {age}</Text>}
      <Button
        title="홈으로 돌아가기"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
        <Tab.Screen name="Details" component={DetailsScreen} options={{ title: '상세' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
