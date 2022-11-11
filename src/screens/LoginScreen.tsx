import { StackScreenProps } from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, Alert } from 'react-native';
import Background from '../components/Background';
import WhiteLogo from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { loginStyles } from '../theme/loginTheme';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps <any,any> {}


const LoginScreen = ({navigation}:Props) => {


    const {signIn, errorMessage,removeError} = useContext(AuthContext)


    const { email, password, onChange } = useForm({
        email: '',
        password: '',
    });

    useEffect(() => {
        if(!errorMessage)
        return;

        Alert.alert(
            'Login Incorrecto',
            errorMessage,
            [{
                text: 'OK',
                onPress: removeError
            }]

        );
    }, [errorMessage])

    const onLogin = () => {
        console.log({ email, password });
        signIn({correo:email, password});
    }

    return (
        <>
            {/* Background */}

            <Background />
            {/* Keyboard avoid view */}
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >

                <View style={{
                    ...loginStyles.formContainer
                }}>

                    <WhiteLogo />

                    <Text style={loginStyles.title}>Login</Text>

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
                        onSubmitEditing={onLogin}

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

                        
                        onSubmitEditing={onLogin}
                        autoCapitalize='none'
                        autoCorrect={false}
                    />

                    {/* Boton Login */}

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
                                    onLogin();
                                    Keyboard.dismiss();
                                }
                            }
                        >
                            <Text style={{
                                ...loginStyles.buttonText
                            }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}

                    <View style={loginStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.4}
                            onPress={()=>navigation.replace('RegisterScreen')}
                        >
                            <Text style={{ ...loginStyles.buttonText }}>
                                Nueva Cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}

export default LoginScreen;

