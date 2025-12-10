import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const navigation = useNavigation(); // navigation 훅 사용

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
  const navigation = useNavigation(); // navigation 훅 사용
  const route = useRoute();           // route 훅 사용

  // route.params로 전달된 값 받기
  const { userName, age } = route.params || {};

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>상세 화면</Text>
      {userName && <Text>이름: {userName}</Text>}
      {age && <Text>나이: {age}</Text>}
      <Button
        title="홈으로 돌아가기"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: '홈' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: '상세' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
