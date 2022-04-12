import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconOctions from 'react-native-vector-icons/Octicons';
import { ImageLogo } from '../../components/ImageLogo';

import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Home = ({ route }) => {
  const navigation = useNavigation();

  const handleGoBack = async () => {
    const keysAll = await AsyncStorage.getAllKeys();
    await AsyncStorage.multiRemove(keysAll);
    route.params.hasToken.current = false;

    navigation.navigate('Login');
  };

  const handleGoCollect = () => {
    navigation.navigate('Collect');
  };

  return (
    <S.Container>
      <S.Header>
        <TouchableOpacity>
          <Icon name="notifications" size={30} color="#3182ce" />
        </TouchableOpacity>
        <View style={{ paddingLeft: 10 }}>
          <TouchableOpacity>
            <IconOctions name="gear" size={30} color="#3182ce" />
          </TouchableOpacity>
        </View>
      </S.Header>

      <S.Body>
        <ImageLogo />

        <S.ContainerButton>
          <S.ButtonAction onPress={handleGoCollect}>
            Coletas disponíveis
          </S.ButtonAction>
          <S.ButtonAction onPress={handleGoBack}>Sair</S.ButtonAction>
        </S.ContainerButton>
      </S.Body>
    </S.Container>
  );
};
