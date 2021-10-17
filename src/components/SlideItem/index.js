import React from 'react';
import { View, Text } from 'react-native';
import { Container, BannerItem, Titulo } from './style';

export default function SlideItem({data}) {
 return (
    <Container activeOpacity={0.7}>
        <BannerItem
            source={{uri: `http://192.168.1.6:4000/imagensVeiculos/${data.primeiraImagem}`}}
        />
        <Titulo numberOfLines={1}>{data.tituloAnuncio}</Titulo>
    </Container>
  );
}