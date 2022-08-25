import { Dimensions, StyleSheet } from "react-native";

const window = Dimensions.get('window');


export const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black'

    },
    globalMargin: {
        marginHorizontal: 20
    },
    pokebolaBG: {
        position: 'absolute',
        top: -0.20 * window.height,
        right: -0.25 * window.width,
        width: window.width * 0.7,
        height: window.height * 0.4,
        opacity: 0.2,

    }

});