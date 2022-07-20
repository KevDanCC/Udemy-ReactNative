import React, { CSSProperties, useContext } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

interface Props {
    title: string,
    styleProp?:Object,
}

export const HeaderTitle = ({title,styleProp}:Props) => {
    const { top } = useSafeAreaInsets();
    const { setDarkTheme, setLightTheme, theme:{colors} } = useContext(ThemeContext);

    return (
        <View style={[{ marginTop: top + 20, marginBottom: 20},styleProp   ]}>
            <Text 
            style={{
                ...styles.title,
                color:colors.text
            
            }}
            
            >{title}</Text>
        </View>
    )
}
