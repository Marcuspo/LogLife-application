/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Header } from '../../components/Header';
import { RouteProp } from '@react-navigation/native';

import { Controller, useForm, UseFormProps } from 'react-hook-form';

import * as S from './styles';

import Icon from 'react-native-vector-icons/Ionicons';
import { CollectionsProps } from '../../@types/types';

interface Props {
  route: RouteProp<{ params: { el: CollectionsProps } }>;
}

export const MakeCollect = ({ route }: Props) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: UseFormProps) => {
    console.log('Enviou:', data);
  };

  return (
    <S.Container>
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <Header />

        <S.Body>
          <S.ViewBody>
            <S.Title>Lançamento da coleta</S.Title>
          </S.ViewBody>
        </S.Body>

        <S.ContentForm>
          <S.FieldController>
            <S.TextInfoTitle>
              Protocolo:{' '}
              <S.TextInfoSubtitle>{route.params.el.id}</S.TextInfoSubtitle>
            </S.TextInfoTitle>
            <S.TextInfoTitle>
              Cliente:{' '}
              <S.TextInfoSubtitle>
                {route.params.el.remetente}
              </S.TextInfoSubtitle>
            </S.TextInfoTitle>

            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <>
                  <TextInput
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      backgroundColor: '#FFF',
                      borderRadius: 10,
                    }}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Responsável"
                  />
                </>
              )}
              name={'responsible'}
            />
            {errors.responsible && (
              <S.TextInfoTitle>
                O campo responsável é obrigatório
              </S.TextInfoTitle>
            )}

            <View
              style={{
                flexDirection: 'row',
                width: '97%',
              }}
            >
              <Controller
                control={control}
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message: 'Digite um número válido no campo de volume',
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { error: errors },
                }) => (
                  <S.TextInput
                    style={{ alignItems: 'center', marginRight: 10 }}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Volume"
                    keyboardType="number-pad"
                  />
                )}
                name={'volume'}
              />

              <Controller
                control={control}
                name={'sample'}
                rules={{
                  pattern: {
                    value: /^[0-9]+$/,
                    message:
                      'Digite um número válido no campo de quantidade de amostras',
                  },
                }}
                render={({
                  field: { onChange, onBlur, value },
                  fieldState: { errors },
                }) => (
                  <S.TextInput
                    style={{
                      textAlign: 'center',
                    }}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Qtde amostras"
                    keyboardType="number-pad"
                  />
                )}
              />
            </View>
            {errors.volume && (
              <S.TextInfoTitle>{errors.volume?.message}</S.TextInfoTitle>
            )}
            {errors.sample && (
              <S.TextInfoTitle>{errors.sample?.message}</S.TextInfoTitle>
            )}

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={{
                    width: '100%',
                    backgroundColor: '#FFF',
                    marginTop: 5,
                    borderRadius: 10,
                  }}
                  multiline
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder="Observações"
                />
              )}
              name="obs"
            />
            {errors.declaration && (
              <S.TextInfoTitle>
                Campo de declaração é obrigatório
              </S.TextInfoTitle>
            )}

            <Controller
              control={control}
              rules={{ required: true }}
              render={() => (
                <View>
                  <TouchableOpacity>
                    <S.DeclarationContainer>
                      <Icon name="camera" size={30} color="#3182ce" />
                      <S.ButtonDeclaration>Declaração</S.ButtonDeclaration>
                    </S.DeclarationContainer>
                  </TouchableOpacity>
                </View>
              )}
              name={'declaration'}
            />
          </S.FieldController>

          <View style={{ flex: 1 }}>
            <S.ButtonContainer>
              <S.ButtonFinish invoice onPress={handleSubmit(onSubmit)}>
                Ocorrência
              </S.ButtonFinish>

              <S.ButtonFinish onPress={handleSubmit(onSubmit)}>
                Finalizar
              </S.ButtonFinish>
            </S.ButtonContainer>
          </View>
        </S.ContentForm>
      </ScrollView>
    </S.Container>
  );
};
