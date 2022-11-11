import React from 'react'
import { View, Text } from 'react-native'

const Background = () => {
    return (
        <View style={{
            position:'absolute',
            backgroundColor:'#5856D6',
            top:-250,
            width:1000,
            height:1100,
            transform:[
                { rotate: '-70deg'}
            ]
            
        }}>
        </View>
    )
}

export default Background
