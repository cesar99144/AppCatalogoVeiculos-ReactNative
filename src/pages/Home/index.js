import React, { useState, useEffect} from 'react';
import { View, Text } from 'react-native';
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
   SlideVeiculos
  } from './styles';
import { Feather } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import SlideItem from '../../components/SlideItem';
import SlideItensDestaque from '../../components/SlideItensDestaque';
import Api from '../../services/api';
import { getListaVeiculos} from '../../utils/veiculos';
export default function Home() {

    const [DestaquesVeiculos, setDestaquesVeiculos] = useState([]);
    const [Carros, setCarros] = useState([]);

    useEffect( ()=>{
        
        let isActive = true;

        async function getDestaques(){
            const response = await Api.get('/destaques');
            
            setDestaquesVeiculos(response.data);
        }

        async function getCarros(){

            const response = await Api.get('/carros');

            setCarros(response.data);
        }

            // const [DestaquesData, CarrosData] = await Promise.all([
            //     Api.get('/destaques'),
            //     Api.get('/carros')
            // ])

            getDestaques();
            getCarros();
            // console.log(response.data);
        
    });
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

        <ScrollView showsVerticalScrollIndicator={false}>
            <TituloBanner>Destaques</TituloBanner>

            <SlideVeiculos showsHorizontalScrollIndicator={false}
              horizontal={true}
              keyExtractor={ item => String(item.idVeiculo) }
              data={DestaquesVeiculos}
              renderItem={ ( { item }) => <SlideItensDestaque data={item} />}
            />

            <TituloBanner>Carros</TituloBanner>

            <SlideVeiculos 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={ item => String(item.idVeiculo)}
            data={Carros}
            renderItem={ ( { item }) => <SlideItem data={item} />}
            />
        </ScrollView>
    </Container>
  );
}