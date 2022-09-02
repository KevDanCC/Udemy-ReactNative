import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import BlackButton from '../components/BlackButton';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissonsScreen = () => {


    const {
        permissions,
        askLocationPermission,
        checkLocationPermission
    } = useContext(PermissionsContext);



    return (
        <View style={styles.container}>
            <Text style={{ ...styles.title }}>Es necesario el uso de GPS para utilizar la Aplicación</Text>

            {/* <Button
                title='Permiso'
                onPress={askLocationPermission}
            /> */}
            <BlackButton
            title='Permiso'
            onPress={askLocationPermission}
            />
            
            <Text>{JSON.stringify(permissions)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        width:200,
        fontSize: 16,
        textAlign:'center',
        marginBottom:20
    }
});