import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { 
    Container,
    Header,
    HeaderButton,
    Titulo,
    DropDownList,
    SearchContainer,
    Input,
    SearchButton,
    AreaDropDow,
    TituloDropDown,
    ContainerDropDow,
    BotaoPesquisa,
    TextoBotao
} from './style';

import {Feather} from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";

import api from "../../services/api";

export default function Filtro(){

    const navigation = useNavigation();
    const [marca, setMarca] = useState(0);
    const [preco, setPreco] = useState(0);
    const [ano, setAno] = useState(0);

    const [listMarcas, setListMarcas] = useState([]);

    function pesquisar(){

        alert(ano)
    }

    useEffect( () => {

        async function getMarcas(){
            const response = await api.get('/marcas');

            setListMarcas(response.data);
        }

        getMarcas();

    }, []);

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
                <Titulo>Filtro</Titulo>
                
            </Header>

            {/* <SearchContainer>
                <Input
                placeholder="Veículos"
                placeholderTextColor="#FFF"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#FFF" />
                </SearchButton>
            </SearchContainer> */}

            <ContainerDropDow>

                <AreaDropDow>
                    <TituloDropDown>Veículo</TituloDropDown>
                    <DropDownList>
                        <Picker
                            selectedValue={marca}
                            onValueChange={(itemValue, itemIndex) =>
                            setMarca(itemValue)}
                        >
                            <Picker.Item style={styles.pickerItem} color="black" label="Carro" value="Carro" />
                            <Picker.Item style={styles.pickerItem} color="black" label="Moto" value="Moto" />
                        </Picker>
                    </DropDownList>
                </AreaDropDow>

                <AreaDropDow>
                    <TituloDropDown>Faixa preço</TituloDropDown>
                    <DropDownList>
                        <Picker
                            selectedValue={preco}
                            onValueChange={(itemValue, itemIndex) =>
                            setPreco(itemValue)}
                        >
                            <Picker.Item style={styles.pickerItem} color="black" label="R$ 20.000 > R$ 35.000" value="1" />
                            <Picker.Item style={styles.pickerItem} color="black" label="R$ 36.000 > R$ 45.000" value="2" />
                            <Picker.Item style={styles.pickerItem} color="black" label="R$ 36.000 > R$ 45.000" value="3" />
                        </Picker>
                    </DropDownList>
                </AreaDropDow>

                <AreaDropDow>
                    <TituloDropDown>Ano</TituloDropDown>
                    <DropDownList>
                        <Picker
                            selectedValue={ano}
                            onValueChange={(itemValue, itemIndex) =>
                            setAno(itemValue)}
                        >
                            <Picker.Item style={styles.pickerItem} color="black" label="2010" value="2010" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2011" value="2011" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2012" value="2012" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2013" value="2013" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2014" value="2014" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2015" value="2015" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2016" value="2016" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2017" value="2017" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2018" value="2017" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2019" value="2017" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2020" value="2017" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2021" value="2017" />
                        </Picker>
                    </DropDownList>
                </AreaDropDow>

                <BotaoPesquisa onPress={ () => pesquisar()}>
                    <TextoBotao>Pesquisar</TextoBotao>
                </BotaoPesquisa>
            </ContainerDropDow>

           
            
        </Container>
    );
}

const styles = StyleSheet.create({
      pickerItem:{
          fontSize: 20,
          fontWeight: "bold"
      }
});