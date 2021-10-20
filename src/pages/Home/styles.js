import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #0F2741;
    padding: 4px 0;
    
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
    margin-top: 8px;
`;
export const Input = styled.TextInput`
    background-color: rgba(255, 255, 255, 0.6);
    width: 85%;
    height: 50px;
    border-radius: 5px;
    padding: 8px 15px;
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
`;

export const SearchButton = styled.TouchableOpacity`
    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
`;

export const BannerContainer = styled.View`
    width: 100%;
    align-items: center;
    margin-top: 10px;
`;

export const AreaCard = styled.View`
    background-color: rgba(255, 255, 255, 0.6);
    height: 100px;
    width: 93%;
    flex-direction: row;
    padding: 10px;
    align-items: center;
`;

export const CardBanner = styled.View`
    border: 1px solid #606060;
    padding: 10px;
    height: 60px;
    align-items: center;
`;

export const ContainerTitulo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const TituloBanner = styled.Text`
    padding-top: 10px;
    padding-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    padding-left: 14px;
    padding-right: 14px;
`;

export const BotaoVerMais = styled.TouchableOpacity`
    width: 25%;
    align-items: center;
    height: 70%;
    margin-top: 3%;
    margin-right: 5px;
`;

export const TextoBotao = styled.Text`
    color: white;
    font-size: 19px;
    margin-top: 3%;
    text-align: center;
    font-weight: bold;
`;

export const SlideVeiculos = styled.FlatList`
    height: 250px;
    padding: 0 14px;
`;

