import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1 } from './Tab1';
import Icon from 'react-native-vector-icons/Ionicons';
import { Tab2Screen } from './Tab2';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={{
                tabBarActiveTintColor: '#5856D5',
                tabBarLabelStyle: {
                    marginBottom: 10,
                    fontSize:12
                },
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: 'rgba(255,255,255,0.75)',
                    elevation: 0,
                    borderWidth: 0,
                    height: 70,
                    marginTop: 10,
                    borderTopColor: 'transparent',
                },
                headerShown: false,
            }}
        >
            <Tab.Screen
                name="HomeScreen"
                component={Tab1}
                options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name='list-outline'
                        />
                    )
                }
                }
            />
            <Tab.Screen
                name="Settings"
                component={Tab2Screen}
                options={{
                    tabBarLabel: 'Búsqueda',
                    tabBarIcon: ({ color }) => (
                        <Icon
                            color={color}
                            size={25}
                            name='search-outline'
                        />
                    )
                }
                }
            />
        </Tab.Navigator>
    );
}