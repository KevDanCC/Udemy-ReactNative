import React, { useContext, useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ProductsContext } from '../context/ProductContext';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import { RefreshControl } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<ProductsStackParams, 'ProductsScreen'> { };



const ProductsScreen = ({ navigation }: Props) => {

    const { products, loadProducts } = useContext(ProductsContext);
    const [isRefresh, setIsRefresh] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={{ marginRight: 10 }}
                    onPress={() => navigation.navigate('ProductScreen', {})}
                >
                    <Text>Agregar</Text>
                </TouchableOpacity>
            )
        })
    }, [])


    const loadProductsFromBacked = async () => {
        setIsRefresh(true);
        const load = await loadProducts();
        console.log({ products });
        setIsRefresh(false);
    }



    return (
        <View style={{ flex: 1, marginHorizontal: 1 }}>

            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={isRefresh}
                        onRefresh={loadProductsFromBacked}
                        progressViewOffset={10}
                        progressBackgroundColor='#5856D6'
                        style={{ backgroundColor: '#5856D6' }}
                        tintColor='white'
                        title='Loading....'
                    />
                }
                data={products}
                keyExtractor={(uniqProd) => uniqProd._id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('ProductScreen', {
                            id: item._id,
                            name: item.nombre
                        })}
                    >
                        <Text style={{ ...styles.productName }}>{item.nombre}</Text>
                    </TouchableOpacity>

                )}
                ItemSeparatorComponent={() => (
                    <View style={{ ...styles.itemSeparator }}></View>
                )}
            />
        </View>
    )
}

export default ProductsScreen

const styles = StyleSheet.create({
    productName: {
        fontSize: 20,
    },
    itemSeparator: {
        borderBottomWidth: 2,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        marginVertical: 5
    }
})
