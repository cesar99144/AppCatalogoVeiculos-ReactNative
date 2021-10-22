import React from "react";
import { Feather} from '@expo/vector-icons';
import { 
    Container, 
    FiltroBotao, 
    MenuBotao, 
    Titulo } from "./style";

import { useNavigation } from "@react-navigation/core";

export default function Header( { titulo }){

    const navigation = useNavigation();

    return(
        <Container>
            <MenuBotao onPress={ () => navigation.openDrawer()}>
                <Feather name="menu" size={36} color="#FFF" />
            </MenuBotao>

            <Titulo>{titulo}</Titulo>

            <FiltroBotao onPress={ () => navigation.navigate("Filtro")}>
                <Feather name="filter" size={36} color="#FFF" />
            </FiltroBotao>

            
        </Container>
    );
}