import React, { useState, useEffect} from 'react';
import { View, Text, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import Header from '../../components/Header';
import {
   Container, 
   SearchContainer, 
   Input, 
   SearchButton, 
   BannerContainer, 
   AreaCard,
   CardBanner,
   TituloBanner,
   SlideVeiculos,
   ContainerTitulo,
   BotaoVerMais,
   TextoBotao
  } from './styles';
import { Feather } from '@expo/vector-icons';
import {} from 'react-native-gesture-handler';
import SlideItem from '../../components/SlideItem';
import SlideItensDestaque from '../../components/SlideItensDestaque';
import Api from '../../services/api';
import { getListaVeiculos} from '../../utils/veiculos';
import { useNavigation } from '@react-navigation/core';

export default function Home() {

    const [DestaquesVeiculos, setDestaquesVeiculos] = useState([]);
    const [Carros, setCarros] = useState([]);
    const [Motos, setMotos] = useState([]);

    const [loading, setLoading] = useState(true);

    const [refreshing, setRefreshing] = useState(false);

    const navigation = useNavigation();

    let isActive = true;
    const abort = new AbortController();

    async function getDestaques(){
        const response = await Api.get('/destaques');
        
        setDestaquesVeiculos(response.data);
        setLoading(false);
    }

    async function getCarros(){

        const response = await Api.get('/carros');

        setCarros(response.data);
    }

    async function getMotos(){

        const response = await Api.get('/motos');

        setMotos(response.data);
    }

    useEffect( ()=>{
        
        

            // const [DestaquesData, CarrosData] = await Promise.all([
            //     Api.get('/destaques'),
            //     Api.get('/carros')
            // ])
            
            getDestaques();
            getCarros();
            getMotos();
            
            // console.log(response.data);
        
    }, []);

    const onRefresh = () =>{
        setRefreshing(false);
        getDestaques();
        getCarros();
        getMotos();
    }

if(loading){
    return(
        <Container>
            <Header titulo="Catálogo veículo" />

            
            <ActivityIndicator size="large" color="#FFF" />
        </Container>
    )
}

 return (
    <Container>
        <Header titulo="Catálogo veículo" />

        <SearchContainer>
            <Input
               placeholder="Veículos"
               placeholderTextColor="#FFF"
            />
            <SearchButton>
                <Feather name="search" size={30} color="#FFF" />
            </SearchButton>
        </SearchContainer>

        {/* <BannerContainer>
            <AreaCard>
                <CardBanner>
                    <Feather name="filter" size={30} color="#FFF" />
                </CardBanner>
            </AreaCard>
        </BannerContainer> */}

        <ScrollView 
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>

            <TituloBanner>Destaques</TituloBanner>

            <SlideVeiculos showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={ item => String(item.idVeiculo) }
              data={DestaquesVeiculos}
              renderItem={ ( { item }) => <SlideItensDestaque data={item} />}
            />

            <ContainerTitulo>

                <TituloBanner>Carros</TituloBanner>

                <BotaoVerMais onPress={ () => navigation.navigate("Carros")}>
                    <TextoBotao>Ver mais</TextoBotao>
                </BotaoVerMais>

            </ContainerTitulo>
            

            <SlideVeiculos 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={ item => String(item.idVeiculo)}
            data={Carros}
            renderItem={ ( { item }) => <SlideItensDestaque data={item} />}
            />

            <TituloBanner>Motos</TituloBanner>

            <SlideVeiculos 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={ item => String(item.idVeiculo)}
            data={Motos}
            renderItem={ ( { item }) => <SlideItensDestaque data={item} />}
            />
        </ScrollView>
    </Container>
  );
}