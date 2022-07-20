import React, { useContext } from 'react'
import { Image, StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { FadeInImage } from './FadeInImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';
// import {  } from 'react-native-gesture-handler';

export const InfiniteScrollScreen = () => {
    const { theme: { colors } } = useContext(ThemeContext);

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {

        console.log('Unint');
        const newArray: number[] = [];
        for (let i = 0; i < 5; i++) {
            newArray[i] = numbers.length + i;
        }

        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 1500);
    }

    const renderItem = (item: number) => {
        return (
            <FadeInImage
                uri={`https://picsum.photos/id/${item}/500/400`}
                style={{
                    width: '100%',
                    height: 400,
                    borderRadius: 40
                }}

            />
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={numbers}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => renderItem(item)}
                ListHeaderComponent={<HeaderTitle title='Infinite Scroll' />}

                onEndReached={loadMore}
                onEndReachedThreshold={0.8}

                ListFooterComponent={() => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}>
                        <ActivityIndicator size={25} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'red',
        height: 300
    }
});