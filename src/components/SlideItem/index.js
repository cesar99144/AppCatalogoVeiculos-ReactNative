import React from 'react';
import { View, Text } from 'react-native';
import { Container, BannerItem, Titulo } from './style';

export default function SlideItem() {
 return (
    <Container activeOpacity={0.7}>
        <BannerItem
            source={{uri: 'https://img.elo7.com.br/product/zoom/1043314/kit-adesivo-lateral-gol-g5-g-2p-gs1-faixa-lateral-para-gol.jpg'}}
        />
        <Titulo numberOfLines={1}>Gol g5fdfdfdddddddddddd</Titulo>
    </Container>
  );
}