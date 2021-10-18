import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    background-color: #0F2741;
    align-items: center;
`;

export const Header = styled.View`
    z-index: 99;
    position: absolute;
    top: 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 0 14px;
`;

export const HeaderButton = styled.TouchableOpacity`
    width: 46px;
    height: 46px;
    background-color: rgba(25, 26, 48, 0.8);
    border-radius: 23px;
    justify-content: center;
    align-items: center;
`;


export const Banner = styled.Image`
    width: 100%;
    height: 300px;
    border-bottom-right-radius: 70px;
    background-color: #FFF;
`;

export const ContainerInfo = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const Titulo = styled.Text`
    color: #FFF;
    font-size: 25px;
    font-weight: bold;
    padding: 8px 14px;
    margin-top: 10px;
`;

export const Info = styled.View`
    width: 25%;
    
    background-color: white;
    margin-left: 14px;
    margin-top: 8px;
    align-items: center;
    margin-right: 14px;
    border-radius: 10px;
`;

export const TextInfo = styled.Text`
    font-size: 15px;
    font-weight: bold;
    padding: 5px;
    color: black;
`;

export const Descricao = styled.Text`
    font-size: 20px;
    padding: 8px 14px;
    margin-top: 10px;
    color: #FFF;
    font-weight: bold;

`;

export const BotaoSaberMais = styled.TouchableOpacity`
    width: 80%;
    background-color: rgba(25, 26, 48, 0.8);
    margin-top: 20px;
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    border: 1px solid #FFF;
`;

export const TextoBotao = styled.Text`
    font-size: 18px;
    color: white;
    margin-left: 10px;
`;