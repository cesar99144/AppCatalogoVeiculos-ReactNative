import React, { useState } from "react";
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
    ContainerDropDow
} from './style';

import {Feather} from '@expo/vector-icons';
import { Picker } from "@react-native-picker/picker";

export default function Filtro(){

    const navigation = useNavigation();
    const [marca, setMarca] = useState(0);

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
                <HeaderButton onPress={ () => navigation.goBack()}>
                    
                </HeaderButton>
            </Header>

            <SearchContainer>
                <Input
                placeholder="Veículos"
                placeholderTextColor="#FFF"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#FFF" />
                </SearchButton>
            </SearchContainer>

            <ContainerDropDow>

                <AreaDropDow>
                    <TituloDropDown>Veículo</TituloDropDown>
                    <DropDownList>
                        <Picker
                            selectedValue={marca}
                            onValueChange={(itemValue, itemIndex) =>
                            setMarca(itemValue)}
                        >
                            <Picker.Item style={styles.pickerItem} color="black" label="Carro" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="Moto" value="java" />
                        </Picker>
                    </DropDownList>
                </AreaDropDow>

                <AreaDropDow>
                    <TituloDropDown>Faixa preço</TituloDropDown>
                    <DropDownList>
                        <Picker
                            selectedValue={marca}
                            onValueChange={(itemValue, itemIndex) =>
                            setMarca(itemValue)}
                        >
                            <Picker.Item style={styles.pickerItem} color="black" label="R$ 20.000 > R$ 35.000" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="R$ 36.000 > R$ 45.000" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="R$ 36.000 > R$ 45.000" value="java" />
                        </Picker>
                    </DropDownList>
                </AreaDropDow>

                <AreaDropDow>
                    <TituloDropDown>Ano</TituloDropDown>
                    <DropDownList>
                        <Picker
                            selectedValue={marca}
                            onValueChange={(itemValue, itemIndex) =>
                            setMarca(itemValue)}
                        >
                            <Picker.Item style={styles.pickerItem} color="black" label="2010" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2011" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2012" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2013" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2014" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2015" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2016" value="java" />
                            <Picker.Item style={styles.pickerItem} color="black" label="2017" value="java" />
                        </Picker>
                    </DropDownList>
                </AreaDropDow>

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