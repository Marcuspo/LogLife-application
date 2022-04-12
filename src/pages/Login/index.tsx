import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import * as S from './styles';
import { ImageLogo } from '../../components/ImageLogo';
import api from '../../server/api';
import { ActivityIndicator } from 'react-native-paper';
import { UserProps } from '../../@types/types';

import AsyncStorage from '@react-native-async-storage/async-storage';

const EMAIL_REGEX =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

export const Login = ({}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<UserProps[]>([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (el: UserProps) => {
    await AsyncStorage.setItem('@loglife::id_user', data[0]?.username);
    setLoading(true);

    navigation.navigate('Home');
    setLoading(false);
  };

  useEffect(() => {
    api
      .get<UserProps[]>('/user/user')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <S.Container>
      <ImageLogo />
      {loading ? (
        <ActivityIndicator />
      ) : (
        <S.ContainerForm>
          <View style={{ marginBottom: 20 }}>
            <Controller
              control={control}
              name={'Email'}
              rules={{
                required: 'Digite um e-mail para logar na aplicação',
                pattern: {
                  value: EMAIL_REGEX,
                  message: 'E-mail inválido, favor digitar corretamente',
                },
                validate: (value) =>
                  value === data[0].email || 'Email não confere',
              }}
              render={({ field: { onBlur, value, onChange } }) => (
                <S.TextInput
                  value={value}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder={'Email'}
                />
              )}
            />

            {errors.Email && <S.TextError>{errors.Email?.message}</S.TextError>}
          </View>

          <Controller
            control={control}
            name={'Senha'}
            rules={{
              required: 'A senha é obrigatória',
              minLength: {
                value: 6,
                message: 'A senha precisa de no mínimo 6 caracteres',
              },
              maxLength: {
                value: 20,
                message: 'A senha não permite mais de 20 caracteres',
              },
              validate: (value) =>
                value === data[0].password || 'Senha não confere',
            }}
            render={({ field: { onBlur, value, onChange } }) => (
              <S.TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                placeholder={'Senha'}
                secureTextEntry
              />
            )}
          />

          {errors.Senha && <S.TextError>{errors.Senha.message}</S.TextError>}

          <S.ContainerButton>
            <S.Button onPress={handleSubmit(onSubmit)}>Logar</S.Button>
          </S.ContainerButton>
        </S.ContainerForm>
      )}
    </S.Container>
  );
};
