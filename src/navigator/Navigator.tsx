import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';

import { ThemeContext } from '../context/themeContext/ThemeContext';

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
import { SlideScreen } from '../screens/SlideScreen';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator();

export const Navigator = () => {
    const {theme}=useContext(ThemeContext);
    
    return (
        <NavigationContainer
        // theme={customTheme}
        theme={theme}
        >
        <Stack.Navigator
            screenOptions={{ 
                headerShown: false,
            cardStyle:{
                // backgroundColor:'white'
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
            <Stack.Screen name='SlideScreen' component={SlideScreen} />
            <Stack.Screen name='ChangeTheme' component={ChangeThemeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    )
}
