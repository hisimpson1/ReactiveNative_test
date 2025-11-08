import React from 'react';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Box>
      <Title>안녕, StyleSheet!</Title>
    </Box>
  );
}

const Box = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f0f8ff;
`;

// styled.Text → React Native의 Text 컴포넌트
const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #2c3e50;
`;
