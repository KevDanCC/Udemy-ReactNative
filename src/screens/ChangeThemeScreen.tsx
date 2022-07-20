import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { HeaderTitle } from '../components/HeaderTitle'
import { styles } from '../theme/appTheme'

import { ThemeContext } from '../context/themeContext/ThemeContext'

export const ChangeThemeScreen = () => {

    const { setDarkTheme, setLightTheme, theme:{colors} } = useContext(ThemeContext);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Theme' />
            <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                // alignContent:'space-between',
                // alignItems:'center',
                // backgroundColor:'red',

            }}>


                <TouchableOpacity
                    onPress={setLightTheme}
                    style={{
                        opacity: 0.8,
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}>
                    <Text style={{
                        color: colors.card,
                        textAlign: 'center',
                        fontSize: 22
                    }}>Light</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={setDarkTheme}
                    style={{
                        opacity: 0.8,
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}>
                    <Text style={{
                        color: colors.card,
                        textAlign: 'center',
                        fontSize: 22
                    }}>Dark</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}

