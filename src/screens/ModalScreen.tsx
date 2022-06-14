import React from 'react'
import { Button, Modal, Text, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useState } from 'react';
import { Header } from '@react-navigation/stack';

export const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false)
    return (
        <View>
            <HeaderTitle title='Modal Screen'></HeaderTitle>
            <Button title='Abrir Modal'
                onPress={() => { setIsVisible(true) }}
            />

            <Modal
                animationType='fade'
                visible={isVisible}
                transparent={true}
            >

                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.25)',
                        justifyContent: 'center',
                        alignItems: 'center'
                        // width:100,
                        // height:100
                    }}
                >

                    {/* Contenido del Modal */}
                    <View style={{
                        backgroundColor: 'white',
                        width: 200,
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowOffset: {
                            width: 0,
                            height: 10
                        },
                        shadowOpacity: 0.25,
                        elevation: 10,
                        borderBottomEndRadius: 5
                    }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                        <Text style={{ fontSize: 20, fontWeight: '400', marginBottom: 20 }}>Cuerpo del Modal</Text>
                        <Button
                            title='Cerrar'
                            onPress={() => setIsVisible(false)}
                        />
                    </View>

                </View>

            </Modal>
        </View>
    )
}
