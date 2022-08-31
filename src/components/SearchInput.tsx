import React, { useEffect, useState } from 'react'
import { StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounceValue } from '../hooks/useDebounceValue';

interface Props{
    onDebounce:(value:string)=>void;
    style?:StyleProp<ViewStyle>
}

export const SearchInput = ({style,onDebounce}:Props) => {

    const [textValue, setTextValue] = useState('');
    const [test,setTest] = useState('');

    const debounceValue=    useDebounceValue(textValue,1500);

    // console.log(setTest(prev => prev+'01'));
    
    useEffect(() => {
        onDebounce(debounceValue);
    }, [debounceValue])



    return (
        <View style={{ 
            ...styles.container, 
            ...style as any
            }}>
            <View style={{ ...styles.textBackground }}>
                <TextInput
                    placeholder='Buscar pokemon'
                    style={{ ...styles.textInput }}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />
                <Icon
                    name='search-outline'
                    color='gray'
                    size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: '#F3F1F3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        top: 2,
        // backgroundColor:'red'
        
    }
});