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


export const CardVeiculos = styled.FlatList`
    height: 100%;
    padding: 0 14px;
`;