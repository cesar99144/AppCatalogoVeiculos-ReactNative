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

    function formatReal( int )
    {
        var tmp = int+'';
        tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
        if( tmp.length > 6 )
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

        return tmp;
    }

    return(
        <Container>
            <Card activeOpacity={0.7}>
                <ImagemCapa source={{uri: `http://192.168.1.8:4000/imagensVeiculos/${data.primeiraImagem}`}} />
                <ContainerDescricao>
                    <TextTitulo>{data.tituloAnuncio}</TextTitulo>
                    <TextPreco>
                        R$ {formatReal(data.preco)}
                    </TextPreco>
                    <BotaoVizualizar onPress={ () => alert('hello') }>
                        <TextoBotao>Ver mais</TextoBotao>
                    </BotaoVizualizar>
                </ContainerDescricao>
            </Card>
        </Container>
    );
}