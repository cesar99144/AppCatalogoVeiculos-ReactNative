import React from 'react';
import { View, Text } from 'react-native';
import { Container, BannerItem, Titulo } from './style';

import {useNavigation} from '@react-navigation/native';

export default function SlideItensDestaque({data}) {
  
  const navigation = useNavigation();
  
  function navigateDetalhes(item){
    
      navigation.navigate('Detalhes', 
      {data: item.idVeiculo, 
      titulo: item.tituloAnuncio, 
      imagem: item.primeiraImagem,
      preco: item.preco,
      marca: item.marca,
      km: item.km,
      estadoVeiculo: item.estadoVeiculo,
      ano: item.ano,
      descricao: item.descricaoAnuncio,
      modelo: item.modelo
      })
  }

  return (
    <Container activeOpacity={0.7} onPress={ () => navigateDetalhes(data)}>
        <BannerItem
            source={{uri: `http://192.168.1.9:4000/imagensVeiculos/${data.primeiraImagem}`}}
        />
        <Titulo numberOfLines={1}>{data.tituloAnuncio}</Titulo>
    </Container>
  );
}