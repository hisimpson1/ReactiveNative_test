### 리액티브 네이티브 API

- TouchableWithoutFeedback : 피드백(시각적 반응)없이 터치 이벤트를 처리한다. https://reactnative.dev/docs/touchablewithoutfeedback
- satus bar 설치 : npx expo install expo-status-bar
- Expo SDK 문서 https://docs.expo.dev/versions/latest/?redirected
- expo 최신버전으로 업데이트: npm install expo@latest
- Expo SDK 버전 확인:  npm show expo version
- Expo를 재설치하고, 네비게이션을 설치 할때 node 버전이 문제가 된적이 있다. 이때, 엑스포는 그대로 두고 node만 재설치 하였다.(기억이 맞나)

- expo 시작시 다음과 같은 워닝이 출력될때 : react-native-reanimated@4.1.0 - expected version: ~4.1.1
- ~~특정 버전의 react-native-reanimated 패키지 설치하기 :   yarn add react-native-reanimated@4.1.1~~  이렇게 하면 yarn.lock 파일이 생성되어, 나중에 eas build 빌드할때 에러가 발생한다.
- babel.config.js 파일에서 Babel 플러그인 제거
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [], // Reanimated 플러그인 제거
  };
};
```
-  babel.config.js 파일이 없는 경우: npx expo customize 명령으로 생성
```
다음과 같이 디폴트로 생성해도 문제가 없다.

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
```
- 빌드하기 전에 문제가 없는지 체크하기 :   npx expo-doctor
