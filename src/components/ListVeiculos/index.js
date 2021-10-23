import React from "react";
import {ScrollView} from 'react-native';
import {} from "react-native-gesture-handler";
import{
    Container,
    Card,
    ImagemCapa,
    TextTitulo,
    ContainerDescricao,
    BotaoVizualizar,
    TextoBotao,
    TextPreco,
} from './style';

export default function ListVeiculos({data}){

    
    return(
        <Container>
            <Card activeOpacity={0.7}>
                <ImagemCapa source={{uri: `http://192.168.1.5:4000/imagensVeiculos/${data.primeiraImagem}`}} />
                <ContainerDescricao>
                    <TextTitulo>{data.tituloAnuncio}</TextTitulo>
                    <TextPreco>
                        R$ {data.preco}
                    </TextPreco>
                    <BotaoVizualizar onPress={ () => alert('hello') }>
                        <TextoBotao>Ver mais</TextoBotao>
                    </BotaoVizualizar>
                </ContainerDescricao>
            </Card>
        </Container>
    );
}