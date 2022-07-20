import React, { Children, createContext, useEffect, useReducer } from "react";
import { Appearance, AppState } from "react-native";
import { useColorScheme } from "react-native";
import { darkTheme, themeReducer, ThemeState, lightTheme } from './themeReducer';


interface ThemeContextPros {
    theme: ThemeState,
    setDarkTheme: () => void,
    setLightTheme: () => void,
}

export const ThemeContext = createContext({} as ThemeContextPros);

export const ThemeProvider = ({ children }: any) => {

    // const colorScheme = useColorScheme();


    const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme))
    // const [theme, dispatch] = useReducer(themeReducer, (Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme))

    useEffect(() => {
        AppState.addEventListener('change', (status) => {
            if (status === 'active') {
                (Appearance.getColorScheme() === 'light')
                    ? setLightTheme()
                    : setDarkTheme()
            }
        })
        // colorScheme === 'light' ? setLightTheme() : setDarkTheme()

    },
        [])
    // [colorScheme])

    const setDarkTheme = () => {
        dispatch({ type: 'set_dark_theme' });
        console.log('setDark-Theme');
    }
    const setLightTheme = () => {
        dispatch({ type: 'set_light_theme' });
        console.log('setLight-Theme');
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )
}