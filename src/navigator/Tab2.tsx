import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { PokemonScreen } from "../screens/PokemonScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { RootStackParams } from "./Tab1";

const stackTabs = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {

    return (
            <stackTabs.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyle: {
                        backgroundColor: 'white'
                    }
                }}
            >
                <stackTabs.Screen name='HomeScreen' 
                component={SearchScreen} />
                
                <stackTabs.Screen name='PokemonScreen' 
                component={PokemonScreen} />
            </stackTabs.Navigator>
    )
}