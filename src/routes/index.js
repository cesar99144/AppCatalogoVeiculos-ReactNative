import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackRoutes from "./stackRoutes";
import CarrosList from "../pages/CarrosList";
import MotosList from "../pages/MotosList";

const Drawer = createDrawerNavigator();

export default function Routes(){
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,

                drawerStyle:{
                    backgroundColor: '#071626',
                    paddingTop: 20,
                },

                drawerActiveBackgroundColor: '#E72F49',
                drawerActiveTintColor: '#FFF',
                drawerInactiveTintColor: '#FFF'
            }}
        >
            <Drawer.Screen name="Inicio" component={StackRoutes} />
            <Drawer.Screen name="Carros" component={CarrosList} />
            <Drawer.Screen name="Motos" component={MotosList}/>
        </Drawer.Navigator>
    );
}