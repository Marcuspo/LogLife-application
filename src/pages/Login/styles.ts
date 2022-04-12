import styled from 'styled-components/native';
import { Button as ButtonPaper } from 'react-native-paper';

import { TextInput as TextInputField } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #e6e6e6;
`;

export const ContainerForm = styled.View`
  width: 100%;
  padding: 20px;
`;

export const TextInput = styled(TextInputField).attrs({
  textAlign: 'center',
})`
  width: 100%;
  margin-top: 5px;
  background-color: #fff;
  border-radius: 10px;
`;

export const ContainerButton = styled.View`
  margin-top: 40px;
  width: 100%;
  justify-content: center;
`;

export const Button = styled(ButtonPaper).attrs({
  mode: 'contained',
  color: '#3182ce',
})`
  border-radius: 40px;
`;

export const TextError = styled.Text`
  font-family: ${({ theme }) => theme.fontFamily.light};
  color: red;
`;
