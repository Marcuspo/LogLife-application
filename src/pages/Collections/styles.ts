import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 20px 20px 0 20px;

  background-color: #e6e6e6;
`;

export const ViewBody = styled.View`
  padding: 15px;
`;

export const Body = styled.View`
  justify-content: center;
  align-items: center;

  padding-top: 40px;

  width: 100%;

  flex: 1;
`;

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${RFValue(25)}px;
  text-transform: uppercase;
`;

export const TextTtitleTable = styled.Text`
  padding: 0 5px;

  font-size: ${RFValue(15)}px;
  font-family: ${(props) => props.theme.fontFamily.bold};
`;

export const ContentTableContainer = styled.ScrollView`
  width: 100%;
  padding: 10px 0;
`;

export const TextTitleTable = styled.Text`
  width: 90%;
  font-family: ${(props) => props.theme.fontFamily.bold};
  font-size: ${RFValue(14)}px;
`;

export const TextContentCard = styled.Text`
  width: 50%;
  font-family: ${(props) => props.theme.fontFamily.light};
  font-size: ${RFValue(13)}px;
`;

export const ViewCard = styled.View`
  width: 100%;
`;

export const ButtonContainer = styled.TouchableOpacity`
  padding-top: 15px;
  width: 95%;
`;
