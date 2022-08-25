import React from 'react'
import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { FadeInImage } from '../components/FadeInImage';
import PokemonCard from '../components/PokemonCard';



const HomeScreen = () => {
    const { top } = useSafeAreaInsets();
    const { simplePokemonList, isLoading, loadPokemons } = usePokemonPaginated();
    console.log(simplePokemonList);
    return (
        <View >
            <Image
                source={require('../assets/pokebola.png')}
                style={styles.pokebolaBG}
            />
            <View style={{
                alignItems: 'center'
            }}>
                <FlatList
                    data={simplePokemonList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    ListHeaderComponent={(
                        <Text
                            style={{
                                ...styles.title,
                                ...styles.globalMargin,
                                top: top + 20,
                                marginBottom: top + 20,
                                paddingBottom: 10
                            }}
                        >Pokemon</Text>
                    )}
                    renderItem={({ item, index }) => <PokemonCard pokemon={item} />}
                    // <FadeInImage
                    // uri={item.picture}
                    // style={{
                    //     width:100,
                    //     height:100
                    // }}
                    // />

                    //infinite scroll

                    //Cuando estemos llegando al final, que funcion ejecutar
                    onEndReached={loadPokemons}
                    //cuando el contenido restante, se encuentre al 40% de terminarse de lo visible
                    onEndReachedThreshold={0.4}
                    ListFooterComponent={
                        <ActivityIndicator style={{ height: 100 }}
                            size={40}
                            color='gray'
                        />
                    }
                />

            </View>

        </View>
    )
}

export default HomeScreen;
