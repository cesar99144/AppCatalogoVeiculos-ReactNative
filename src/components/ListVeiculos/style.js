import styled from "styled-components";

export const Container = styled.View`
    align-items: center;
`;

export const Card = styled.TouchableOpacity`
    background-color: #FFFFFF;
    margin-top: 20px;
    border-radius: 20px;
    padding: 10px;
    flex-direction: row;
    width: 98%;
`;

export const ImagemCapa = styled.Image`
    width: 88px;
    height: 88px;
    border-radius: 20px;
    
`;

export const ContainerDescricao = styled.View`
    margin-left: 20px;
    width: 200px;
    justify-content: space-between;
`;

export const TextTitulo = styled.Text`
    font-size: 17px;
    font-weight: bold;
`;

export const TextPreco = styled.Text`
    font-size: 17px;
    color: teal;
    font-weight: bold;
`;

export const BotaoVizualizar = styled.TouchableOpacity`
    width: 85px;
    height: 26px;
    border: 1px solid #4EADBE;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

export const TextoBotao = styled.Text`
    font-size: 15px;
    color: #268596;
    font-weight: bold;
`;