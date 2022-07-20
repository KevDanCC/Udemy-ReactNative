import React, { useContext, useRef } from 'react'
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { useAnimation } from '../hooks/useAnimation';
// import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Animation101Screen = () => {

    const { fadeIn, fadeOut, opacity, startMovingPosition, position } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);


    return (
        <View style={styles.container}>
            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity: opacity,
                transform: [{
                    translateY: position
                }]
            }}>

            </Animated.View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between',}}>
                <TouchableOpacity
                    onPress={() => {
                        fadeIn();
                        startMovingPosition().start();
                    }}
                    style={{
                        opacity: 0.8,
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            color: colors.text,
                            textAlign:'center'
                        }}
                    >FadeIn</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={fadeOut}
                    style={{
                        opacity: 0.8,
                        width: 150,
                        height: 50,
                        borderRadius: 20,
                        backgroundColor: colors.primary,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                             color: colors.text ,
                             textAlign:'center'
                            }}
                    >FadeOut</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    purpleBox: {
        backgroundColor: '#5856D6',
        width: 150,
        height: 150
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});