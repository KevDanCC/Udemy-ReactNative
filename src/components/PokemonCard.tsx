import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react'
import { TouchableOpacity, Text, View, StyleSheet, Dimensions, Image } from 'react-native';
import ImageColors from 'react-native-image-colors';
import { SimplePokemon } from '../interfaces/pokemonInterfaces'
import { FadeInImage } from './FadeInImage';


const windowWidth = Dimensions.get('window').width;

interface Props {
    pokemon: SimplePokemon
}
// interface Props extends StackScreenProps<> {};


const PokemonCard = ({ pokemon }: Props) => {


    const [bgColor, setBgColor] = useState('gray');
    const isMounted = useRef(true);
    const navigator = useNavigation<any>();

    useEffect(() => {

        const uri = pokemon.picture;
        ImageColors.getColors(uri, { fallback: 'gray', }).then(colors => {

            if (!isMounted.current) return;

            if (colors.platform === 'ios')
                setBgColor(colors.background);
            else if (colors.platform === 'android')
                setBgColor(colors.dominant || 'grey');
        });

        return () => {
            isMounted.current = false;
        }
    }, [])


    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                navigator.navigate('PokemonScreen', {
                    simplePokemon: pokemon,
                    color: bgColor
                })
            }}
        >
            <View style={{
                ...styles.cardContainer,
                width: windowWidth * 0.4,
                backgroundColor: bgColor
            }}>
                {/* Nombre Pokemon */}
                <View>
                    <Text style={{
                        ...styles.name
                    }}>
                        {pokemon.name}
                        {'\n#' + pokemon.id}
                    </Text>
                </View>
                <View style={{
                    ...styles.pokebolaContianer
                }}>
                    <Image
                        source={require('../assets/pokebola-blanca.png')}
                        style={{ ...styles.pokebola }}
                    />

                </View>
                <FadeInImage
                    uri={pokemon.picture}
                    style={{
                        ...styles.pokemonImage
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}

export default PokemonCard

const styles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        backgroundColor: 'gray',
        height: 120,
        width: 150,
        marginBottom: 25,
        borderRadius: 10,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,


    },
    name: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        top: 20,
        left: 10,
    },
    pokebola: {
        width: 100,
        height: 100,
        position: 'absolute',
        right: -25,
        bottom: -25

    },
    pokemonImage: {
        width: 120,
        height: 120,
        position: 'absolute',
        right: -8,
        bottom: -5,

    },
    pokebolaContianer: {
        width: 100,
        height: 100,
        position: 'absolute',
        bottom: 0,
        right: 0,
        overflow: 'hidden',
        opacity: 0.5
    }
});