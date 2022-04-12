import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import api from '../../server/api';
import { Header } from '../../components/Header';
import * as S from './styles';
import { CollectionsProps } from '../../@types/types';
import { ActivityIndicator, Button, Card } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';

export const Collect = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<CollectionsProps[]>([]);

  const navigation = useNavigation();

  const handleMakeCollect = (el: CollectionsProps) => {
    navigation.navigate('MakeCollect', { el });
  };
  useEffect(() => {
    api
      .get<CollectionsProps[]>('/collect/collections')
      .then((response) => {
        setLoading(false);
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <S.Container>
      <Header />

      <S.Body>
        <S.ViewBody>
          <S.Title>Coletas disponíveis</S.Title>
        </S.ViewBody>

        <ScrollView showsVerticalScrollIndicator={false}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            <>
              {data.map((el) => (
                <S.ContentTableContainer horizontal key={el.id}>
                  <Card>
                    <Card.Content>
                      <S.Title>{el.remetente}</S.Title>
                      <S.ViewCard>
                        <S.TextTitleTable>
                          Protocolo:{' '}
                          <S.TextContentCard>{el.id}</S.TextContentCard>
                        </S.TextTitleTable>
                        <S.TextTitleTable>
                          Cliente:{' '}
                          <S.TextContentCard>{el.remetente}</S.TextContentCard>
                        </S.TextTitleTable>
                        <S.TextTitleTable>
                          Endereço:{' '}
                          <S.TextContentCard>
                            {el.street}, {el.number}
                          </S.TextContentCard>
                        </S.TextTitleTable>
                        <S.TextTitleTable>
                          Estado:{' '}
                          <S.TextContentCard>{el.state}</S.TextContentCard>
                        </S.TextTitleTable>
                        <S.TextTitleTable>
                          Cidade:{' '}
                          <S.TextContentCard>
                            {el.cityIDAddress.name}
                          </S.TextContentCard>
                        </S.TextTitleTable>
                        <S.TextTitleTable>
                          Bairro:{' '}
                          <S.TextContentCard>
                            {el.neighborhood}
                          </S.TextContentCard>
                        </S.TextTitleTable>
                        <S.TextTitleTable>
                          Ponto de referência:{' '}
                          <S.TextContentCard>
                            {el.reference_point}
                          </S.TextContentCard>
                        </S.TextTitleTable>
                        <S.TextTitleTable>Contato:</S.TextTitleTable>
                        <S.TextTitleTable>Setor unidade:</S.TextTitleTable>
                      </S.ViewCard>
                    </Card.Content>
                    <S.ButtonContainer onPress={() => handleMakeCollect(el)}>
                      <Button color="#3182ce">Realizar coleta</Button>
                    </S.ButtonContainer>
                  </Card>
                </S.ContentTableContainer>
              ))}
            </>
          )}
        </ScrollView>
      </S.Body>
    </S.Container>
  );
};
