import React, { useEffect, useState } from 'react'
import { Platform, View, ActivityIndicator, StyleSheet, Text, FlatList, Dimensions, Keyboard } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import PokemonCard from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { styles as globalStyles } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
    const { top } = useSafeAreaInsets();
    const { isFetching, simplePokemonList } = usePokemonSearch();

    const [pokemonFiltered, setPokemonFiltered] = useState<SimplePokemon[]>([])
    const [term, setTerm] = useState('');

    useEffect(() => {
        if (term.length === 0)
            return setPokemonFiltered([])

        if (isNaN(Number(term)))
            setPokemonFiltered(
                simplePokemonList.filter(
                    (poke) => poke.name.toLowerCase().includes(term.toLowerCase())
                )
            )
        else {
            const pokemonId = simplePokemonList.find((pokemon) => pokemon.id === term);

            setPokemonFiltered((pokemonId) ? [pokemonId] : [])

        }
Keyboard.dismiss();

    }, [term])

    if (isFetching)
        return <Loading />

    return (
        <View style={{
            flex: 1,
            marginHorizontal: 20,
        }}>
            <SearchInput
                onDebounce={setTerm}
                style={{
                    position: 'absolute',
                    zIndex: 999,
                    width: screenWidth - 40,
                    top: (Platform.OS === 'ios' ? top : top + 30),
                }} />
            <FlatList
                data={pokemonFiltered}
                keyExtractor={(pokemon) => pokemon.id}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={(
                    <Text
                        style={{
                            ...globalStyles.title,
                            ...globalStyles.globalMargin,
                            top: top + 20,
                            marginBottom: top + 20,
                            paddingBottom: 10,
                            marginTop: (Platform.OS === 'ios' ? top + 60 : top + 70),
                        }}
                    >{term}</Text>
                )}
                renderItem={({ item, index }) => <PokemonCard pokemon={item} />}
            />
        </View>
    )
}
