import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    background-color: #0F2741;
    align-items: center;
`;

export const Header = styled.View`
   
    top: 25px;
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

export const Titulo = styled.Text`
    color: white;
    font-size: 25px;
    font-weight: bold;
    
`;

export const SearchContainer = styled.View`
    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;
    margin-top: 60px;
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

export const ContainerDropDow = styled.View`
    margin-top: 3px;
    width: 100%;
    height: 100%;
    padding: 8px 14px;
`;

export const ContainerDuploDrow = styled.View`
    width: 100%;
    height: 100%;
    flex-direction: row;
`;

export const AreaDropDow = styled.View`
    height: 15%;
    width: 100%;
    margin-top: 5px;
    padding: 8px 14px;
`;

export const DropDownList = styled.View`
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.6);
    margin-top: 5px;
`;

export const TituloDropDown = styled.Text`
    color: white;
    font-size: 19px;
    font-weight: bold;
`;