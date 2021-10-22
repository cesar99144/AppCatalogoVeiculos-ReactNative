import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';
import LoadRoutes from './src/routes/loadRoutes';
import { StatusBar } from 'expo-status-bar';

export default function App(){
    return(
      <NavigationContainer>
          <StatusBar hidden={true} />
          <LoadRoutes />
      </NavigationContainer>
    );
}