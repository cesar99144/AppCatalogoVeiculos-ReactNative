import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Preloader from '../pages/Preloader';
import Routes from './index';

const Stack = createNativeStackNavigator();

export default function LoadRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Preloader" 
                component={Preloader}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Routes"
                component={Routes}
                options={{
                    headerShown: false,
                }}
                
            />
            
        </Stack.Navigator>
    );
}