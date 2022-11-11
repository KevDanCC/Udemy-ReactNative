import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import WhiteLogo from '../components/WhiteLogo';
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';


interface Props extends StackScreenProps<any, any> { }


const RegisterScreen = ({ navigation }: Props) => {

    const { errorMessage, signUp, removeError } = useContext(AuthContext)



    const { email, password, name, onChange } = useForm({
        name: '',
        email: '',
        password: '',
    });

    const onRegister = () => {
        console.log({ email, password, name });
    }

    useEffect(() => {
        if(!errorMessage)
        return;

        Alert.alert(
            'Registro Incorrecto',
            errorMessage,
            [{
                text: 'OK',
                onPress: removeError
            }]

        );
    }, [errorMessage])






    return (
        <>

            {/* Keyboard avoid view */}
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#5856D6' }}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >

                <View style={{
                    ...loginStyles.formContainer
                }}>

                    <WhiteLogo />

                    <Text style={loginStyles.title}>Registro</Text>

                    <Text style={loginStyles.label}>Nombre:</Text>
                    <TextInput
                        placeholder='Ingrese su nombre:'
                        placeholderTextColor='rgba(255,255,255,0.4)'
                        keyboardType='email-address'
                        underlineColorAndroid='white'
                        style={
                            [loginStyles.inputField,
                            Platform.OS === 'ios' &&
                            loginStyles.inputIos
                            ]
                        }
                        selectionColor='white'

                        //TODO: onchange
                        onChangeText={(retornValue) => onChange(retornValue, 'name')}
                        value={name}
                        onSubmitEditing={onRegister}

                        autoCapitalize='words'
                    />

                    <Text style={loginStyles.label}>Email:</Text>
                    <TextInput
                        placeholder='Ingrese su email:'
                        placeholderTextColor='rgba(255,255,255,0.4)'
                        keyboardType='email-address'
                        underlineColorAndroid='white'
                        style={
                            [loginStyles.inputField,
                            Platform.OS === 'ios' &&
                            loginStyles.inputIos
                            ]
                        }
                        selectionColor='white'

                        //TODO: onchange
                        onChangeText={(retornValue) => onChange(retornValue, 'email')}
                        value={email}
                        onSubmitEditing={onRegister}

                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    <Text style={loginStyles.label}>Contraseña:</Text>
                    <TextInput
                        placeholder='****'
                        secureTextEntry
                        placeholderTextColor='rgba(255,255,255,0.4)'
                        // keyboardType='password'
                        underlineColorAndroid='white'
                        style={
                            [loginStyles.inputField,
                            Platform.OS === 'ios' &&
                            loginStyles.inputIos
                            ]
                        }
                        selectionColor='white'
                        //TODO: onchange
                        onChangeText={(retornValue) => onChange(retornValue, 'password')}
                        value={password}

                        onSubmitEditing={onRegister}

                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    {/* Boton  */}

                    <View style={{
                        ...loginStyles.buttonContainer
                    }}>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            style={{
                                ...loginStyles.button
                            }}
                            onPress={
                                () => {
                                    console.log({ email, password });
                                    Keyboard.dismiss();
                                    signUp({
                                       correo: email,
                                        password,
                                        nombre: name
                                    });

                                }
                            }
                        >
                            <Text style={{
                                ...loginStyles.buttonText
                            }}>Crear cuenta</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.replace('LoginScreen')
                        }}
                        activeOpacity={0.8}
                        style={{
                            ...loginStyles.buttonReturn
                        }}
                    >
                        <Text style={{
                            ...loginStyles.buttonText
                        }}>Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})
