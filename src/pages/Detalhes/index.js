import React, {useState, useEffect} from 'react';
import {Container, 
        Header,
        HeaderButton, 
        Banner, 
        Titulo,
        ContainerInfo,
        Descricao,
        Info,
        TextInfo,
        BotaoSaberMais,
        TextoBotao} from './style';

import {Feather} from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/core';
import Api from '../../services/api';

export default function Detalhes(){

    const navigation = useNavigation();
    const route = useRoute();

    const [veiculo, setVeiculo] = useState([]);

    useEffect( () => {
        
        let isActive = true;

        async function getVeiculo(){
            const response = await Api.get(`veiculo/${route.params?.id}`);

            if(isActive){
                setVeiculo(response.data);
                // console.log(response.data);
            }
        }

        if(isActive){
            getVeiculo();
            console.log(veiculo);
        }

        // getVeiculo();
        // console.log(veiculo);

        return () =>{
            isActive = false;
        }
       
    }, [])

    

    return(
        
        <Container>
            <Header>
                <HeaderButton onPress={ () => navigation.goBack()}>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#FFF"
                    />
                </HeaderButton>
            </Header>
             
            <Banner
                resizeMethod="resize"
                source={{ uri: `http://192.168.1.9:4000/imagensVeiculos/${route.params?.imagem}` }}
            />

            <ContainerInfo>
                <Titulo>{route.params?.titulo}</Titulo>
                <Titulo>R$ {route.params?.preco}</Titulo>
            </ContainerInfo>
            
            <ContainerInfo>
                <Info>
                    <TextInfo>2013</TextInfo>
                </Info>
                <Info>
                    <TextInfo>{route.params?.modelo}</TextInfo>
                </Info>
                <Info>
                    <TextInfo>{route.params?.marca}</TextInfo>
                </Info>
            </ContainerInfo>

            <Descricao>{route.params.descricao}</Descricao>
            
            <BotaoSaberMais>
                <Feather name="phone" color="#FFF" size={36} />
                <TextoBotao>Saber mais</TextoBotao>
            </BotaoSaberMais>
        </Container>
        
    );
}