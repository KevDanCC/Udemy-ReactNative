import React, { useEffect, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Button, Image } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { Picker } from '@react-native-picker/picker';
import { ProductsStackParams } from '../navigator/ProductsNavigator';
import useCategories from '../hooks/useCategories';
import LoadingScreen from './LoadingScreen';
import { useForm } from '../hooks/useForm';
import { ProductsContext } from '../context/ProductContext';
import { Producto } from '../interfaces/appInterfaces';

interface Props extends StackScreenProps<ProductsStackParams, 'ProductScreen'> { };

const ProductScreen = ({ route, navigation }: Props) => {
    const { id = '', name = '' } = route.params;

    const { categories, isLoading } = useCategories();
    const { loadProductById, addProduct, updateProduct } = useContext(ProductsContext)

    const { _id, categoriaId, nombre, img, form, onChange, setFormValue } = useForm({
        _id: id,
        categoriaId: '',
        nombre: name,
        img: '',

    });

    useEffect(() => {
        navigation.setOptions({
            title: `${nombre ? nombre : 'Sin nombre del producto'}`

        })
    }, [nombre]);


    useEffect(() => {
        loadProducto();
    }, [])


    const loadProducto = async () => {
        if (_id.length === 0) return;

        const product = await loadProductById(id);
        console.log(product);
        setFormValue({
            _id: id,
            categoriaId: product.categoria._id,
            nombre: product.nombre,
            img: product.img || '',

        })
    }


    const saveOrUpdate = async() => {
        if (_id.length > 0){
            updateProduct(categoriaId, nombre, _id)
        }
        else{
            // if(!categoriaId ) onChange(categories[0]._id,'categoriaId')
            const temporal= categoriaId || categories[0]._id;
           const newProductAdd=await addProduct(temporal,nombre)
            onChange(temporal,'categoriaId')
            onChange(newProductAdd._id,'_id')
        }
    }


    return (
        <>
            {
                isLoading

                    ?

                    <LoadingScreen />

                    :

                    <View style={styles.container}>
                        <ScrollView>
                            <Text style={styles.label}>Nombre del producto :</Text>
                            <TextInput
                                placeholder='Producto'
                                style={styles.textInput}
                                value={nombre}
                                onChangeText={(valor) => onChange(valor, 'nombre')}
                            />

                            {/* Picker / Selector */}
                            <Text style={styles.label}>Categoría :</Text>
                            <Picker
                                selectedValue={categoriaId}
                                onValueChange={(valorItem) => onChange(valorItem, 'categoriaId')}>
                                {categories.map(categoria => (

                                    <Picker.Item label={categoria.nombre} value={categoria._id} key={categoria._id} />

                                ))}
                                <Picker.Item label="JavaScript" value="js" />
                            </Picker>

                            <Button
                                title='Guardar'
                                onPress={saveOrUpdate}
                                color='#5856D6'
                            />

                            {
                                (_id.length > 0) && (

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 70 }}>
                                        <Button
                                            title='Cámara'
                                            onPress={() => { }}
                                            color='#5856D6'
                                        />
                                        <Button
                                            title='Galeria'
                                            onPress={() => { }}
                                            color='#5856D6'
                                        />
                                    </View>
                                )
                            }


                            <Text>{JSON.stringify(form, null, 3)}</Text>

                            {
                                img.length > 0 && (
                                    <Image
                                        source={{ uri: img }}
                                        style={{
                                            width: '100%',
                                            height: 300,
                                            marginTop: 20,
                                            marginBottom: 50

                                        }}
                                    />
                                )
                            }


                        </ScrollView>
                    </View>
            }

        </>

    )
}

export default ProductScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginHorizontal: 20
    },
    label: {
        fontSize: 18
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        borderColor: 'rgba(0,0,0,0.2)',
        height: 45,
        marginTop: 5,
        marginBottom: 10
    }
})