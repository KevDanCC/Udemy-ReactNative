
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useReducer } from 'react'
import cafeAPI from '../api/cafeAPI';
import { LoginData, LoginResponse, RegisterData, Usuario } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './authReducer';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (registerData:RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;

}


export const AuthContext = createContext({} as AuthContextProps);

const authInitialState: AuthState = {

    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(authReducer, authInitialState);


    useEffect(() => {
        checkToken();
    }, []);


    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token');
        if (!token) return dispatch({ type: 'notAuthenticated' });

        const resp = await cafeAPI.get('/auth');
        if (resp.status !== 200)
            return dispatch({ type: 'notAuthenticated' })

        await AsyncStorage.setItem('token', resp.data.token);
        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        })
    }




    const signUp = async({correo,nombre,password}:RegisterData) => { 
        try{
            const response= await cafeAPI.post<LoginResponse>('/usuarios', {correo,nombre,password});

            console.log('Respuesta de Registro', JSON.stringify(response));

            dispatch({
                type:'signUp',
                payload:{
                    token:response.data.token,
                    user: response.data.usuario
                }
            })

            await AsyncStorage.setItem('token', response.data.token);


        }catch(err:any){
            console.log(err.response.data.errors[0].msg);
            dispatch({
                type:'addError',
                payload: err.response.data.errors[0].msg || 'Información Incorrecta'
            })

        }


    };




    const signIn = async ({ correo, password }: LoginData) => {
        try {
            const { data } = await cafeAPI.post<LoginResponse>('/auth/login', { correo, password });
            console.log(data, 'RESPUESTA');

            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            })
            await AsyncStorage.setItem('token', data.token);

        } catch (error: any) {
            console.log(error.response.data, 'ERRRRRRRRRRR');
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información Incorrecta'
            })
        }
    };

    


    const logOut = async() => { 

        await AsyncStorage.removeItem('token');
        dispatch({
            type:'logout'
        })
    };




    const removeError = async () => {
        dispatch({
            type: 'removeError'
        })
    };




    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
        }}>
            {children}
        </AuthContext.Provider>
    )
}