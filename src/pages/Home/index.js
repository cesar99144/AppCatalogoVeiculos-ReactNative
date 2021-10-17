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
import Api from '../../services/api';

export default function Home() {

    const [DestaquesVeiculos, setDestaquesVeiculos] = useState([]);

    useEffect( ()=>{
        
        let isActive = true;

        async function getDestaques(){
            const response = await Api.get('/destaques');
            console.log(response.data);
        }

            // const [DestaquesData, CarrosData] = await Promise.all([
            //     Api.get('/destaques'),
            //     Api.get('/carros')
            // ])

            getDestaques();
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
              data={[1,2,3,4]}
              renderItem={ ( { item }) => <SlideItem />}
            />

            <TituloBanner>Carros</TituloBanner>

            <SlideVeiculos 
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={[1,2,3,4]}
            renderItem={ ( { item }) => <SlideItem />}
            />
        </ScrollView>
    </Container>
  );
}