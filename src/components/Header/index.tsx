import React from 'react';
import Logo from '../../assets/logo.jpg';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import * as S from './styles';

import { useNavigation } from '@react-navigation/native';

export const Header = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View>
      <S.Header>
        <View>
          <TouchableOpacity onPress={handleGoBack}>
            <Icon name="arrow-back" size={30} color="#3182ce" />
          </TouchableOpacity>
        </View>

        <View>
          <S.ImageLogo source={Logo} />
        </View>
        <View style={{ width: 25 }} />
      </S.Header>
    </View>
  );
};
