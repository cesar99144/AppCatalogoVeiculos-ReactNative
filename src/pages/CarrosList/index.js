import React, {useState, useEffect} from "react";
import {ScrollView, RefreshControl} from 'react-native';
import Header from "../../components/Header";
import {} from "react-native-gesture-handler";
import { 
    Container,
    CardVeiculos,
    SearchContainer,
    SearchButton,
    Input,

} from './style';

import {Feather} from '@expo/vector-icons';
import ListVeiculos from "../../components/ListVeiculos";
import Api from '../../services/api';

export default function CarrosList(){

    const [refreshing, setRefreshing] = useState(false);
    const [carros, setCarros] = useState([]);

    async function getCarros(){
        const response = await Api.get('/carros');
        setCarros(response.data);
    }

    useEffect( () => {

        getCarros();

    }, []);

    const onRefresh = () =>{
        setRefreshing(false);
        getCarros();   
    }


    return(
        <Container>
            <Header titulo="Carros" />

            <ScrollView 
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>
                <SearchContainer>
                    <Input
                    placeholder="Veículos"
                    placeholderTextColor="#FFF"
                    />
                    <SearchButton>
                        <Feather name="search" size={30} color="#FFF" />
                    </SearchButton>
                </SearchContainer>
                <CardVeiculos
                    data={carros}
                    keyExtractor={ item => String(item.idVeiculo)}
                    renderItem={ ( { item }) => <ListVeiculos data={item} />}
                />
            </ScrollView>
            
        </Container>
    );
}