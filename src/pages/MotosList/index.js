import React, {useEffect, useState} from 'react';
import {ScrollView, RefreshControl} from 'react-native';
import {
    Container,
    CardVeiculos,
    SearchContainer,
    SearchButton,
    Input,
} from './style';

import {Feather} from '@expo/vector-icons';
import Header from '../../components/Header';
import ListVeiculos from '../../components/ListVeiculos';
import api from '../../services/api';

export default function MotosList(){

    const [refreshing, setRefreshing] = useState(false);
    const [motos, setMotos] = useState([]);

    async function getMotos(){
        const response = await api.get('/motos');
        setMotos(response.data);
    }

    useEffect( () => {

        getMotos();

    }, []);

    const onRefresh = () =>{
        setRefreshing(false);
        getMotos();   
    }

    return(
        <Container>
                <Header titulo="Motos" />

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
                        data={motos}
                        keyExtractor={ item => String(item.idVeiculo)}
                        renderItem={ ( { item }) => <ListVeiculos data={item} />}
                    />
            </ScrollView>
        </Container>
    );
}
