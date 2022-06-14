import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Icon from 'react-native-vector-icons';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { HomeScreen } from '../screens/HomeScreen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefresh } from '../screens/PullToRefresh';
import { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';


const Stack = createStackNavigator();

export const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false,
            cardStyle:{
                backgroundColor:'white'
            }
            }}
            >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='Animation101Screen' component={Animation101Screen} />
            <Stack.Screen name='Animation102Screen' component={Animation102Screen} />
            <Stack.Screen name='SwitchScreen' component={SwitchScreen} />
            <Stack.Screen name='AlertScreen' component={AlertScreen} />
            <Stack.Screen name='TextInputsScreen' component={TextInputScreen} />
            <Stack.Screen name='PullToRefresh' component={PullToRefresh} />
            <Stack.Screen name='CustomSectionListScreen' component={CustomSectionListScreen} />
            <Stack.Screen name='ModalScreen' component={ModalScreen} />
            <Stack.Screen name='InfiniteScrollScreen' component={InfiniteScrollScreen} />
        </Stack.Navigator>
    )
}
