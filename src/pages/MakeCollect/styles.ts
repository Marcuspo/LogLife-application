import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput as TextInputField } from 'react-native';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 20px 0 20px;

  background-color: #e6e6e6;
`;

export const Body = styled.View``;

export const ViewBody = styled.View`
  padding: 15px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${RFValue(25)}px;
  text-transform: uppercase;
`;

export const ContentForm = styled.View``;

export const FieldController = styled.View`
  width: 100%;
`;

export const TextInfoTitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${RFValue(14)}px;
  align-self: stretch;
`;

export const TextInfoSubtitle = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.light};
`;

export const TextInput = styled(TextInputField).attrs({
  textAlign: 'center',
})`
  width: 50%;
  margin-top: 5px;
  background-color: #fff;
  border-radius: 10px;
`;

export const DeclarationContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const ButtonDeclaration = styled(Button)``;

export const ButtonContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-right: 5px;
  padding-top: 40px;
`;

export const ButtonFinish = styled(Button).attrs({
  color: '#FFF',
})`
  width: 50%;
  margin-right: 5px;
  background-color: ${(props) => (props.invoice ? '#ffad33' : '#000')};
`;
