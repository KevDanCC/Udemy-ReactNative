import React, { useContext, useState } from 'react'
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Text } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { CustomSwitch } from '../components/CustomSwitch';
import { useForm } from '../hooks/useForm';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const TextInputScreen = () => {

    const { form, onChange } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribe: false
    });

    const { theme: { colors } } = useContext(ThemeContext);

    return (
            <ScrollView>
                <View style={styles.globalMargin}>
                    <TextInput style={{...localStyles.inputStyle,backgroundColor:colors.primary, color:colors.text}}
                        placeholder='Ingrese su nombre'
                        placeholderTextColor={colors.card}
                        autoCorrect={false}
                        autoCapitalize='words'
                        onChangeText={(value) => onChange(value, 'name')}
                        
                    />
                    <TextInput style={[localStyles.inputStyle,{backgroundColor:colors.primary, color:colors.text}]}
                        placeholder='Ingrese su email'
                        placeholderTextColor={colors.card}
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType='email-address'

                    />
                    <View style={localStyles.switchRow}>

                        <Text style={localStyles.switchText}>Suscripción activa</Text>
                        <CustomSwitch isOn={false} onChange={(value) => onChange(value, 'isSuscribe')} />
                    </View>


                    <HeaderTitle title={JSON.stringify(form, null, 2)}></HeaderTitle>
                    <HeaderTitle title={JSON.stringify(form, null, 2)}></HeaderTitle>

                    <TextInput style={[localStyles.inputStyle,{backgroundColor:colors.primary, color:colors.text}]}
                        placeholder='Ingrese su teléfono'
                        placeholderTextColor={colors.card}
                        onChangeText={(value) => onChange(value, 'phone')}
                        keyboardType='phone-pad'
                    />
                </View>
            </ScrollView>
    )
}

const localStyles = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: 'rgba(0,0,0,0.3)',
        marginVertical: 10
    },
    switchText: {
        fontSize: 25,
        // PaddingTop:20
    },
    switchRow:{
        justifyContent:'space-between',
        flexDirection:'row',
        
    }
});