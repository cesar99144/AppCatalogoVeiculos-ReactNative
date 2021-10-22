import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
  Container,
  AreaCirculo,
  Circulo
} from './style';

export default function Preloader() {

  const [circuloAmarelo, setCirculoAmarelo] = useState(require('../../../assets/yellow-circle.png'));

  const [circuloLaranja, setCirculoLaranja] = useState(require('../../../assets/circleOrange.png'));

  const navigation = useNavigation();

    useEffect( () => {

        function load(){
            
            // setTimeout(function(){
            //     navigation.navigate('Routes');
            // }, 2000);
        }

        load();

    }, []);

  return (
    <Container>
      <AreaCirculo>
          <Circulo>
            <Text>sds</Text>
          </Circulo>
      </AreaCirculo>
    </Container>
  );
}