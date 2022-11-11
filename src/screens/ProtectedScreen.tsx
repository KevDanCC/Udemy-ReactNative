import React, {useContext} from 'react'
import { StyleSheet, Text, View,Button, } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const ProtectedScreen = () => {


    const {user,token,logOut} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Protected Screen</Text>

            <Button 
            
            title='LogOut'
            color='#5856D6'
            onPress={logOut}
            />

            <Text>{JSON.stringify(user, null, 5)}</Text>
            <Text>{JSON.stringify(token, null, 5)}</Text>
        </View>
    )
}

export default ProtectedScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:20,
        marginBottom:20
    }
})
