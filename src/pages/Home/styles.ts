import styled from 'styled-components/native';
import { Button as ButtonPaper } from 'react-native-paper';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px;

  background-color: #e6e6e6;
`;

export const Header = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ContainerButton = styled.View`
  padding-top: 45px;
`;

export const ButtonAction = styled(ButtonPaper).attrs({
  mode: 'outlined',

  color: '#3182ce',
})`
  margin-top: 15px;
  border-color: ${(props) => props.theme.colors.primary};
`;
