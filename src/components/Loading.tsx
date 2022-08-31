import React from 'react'
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';

export const Loading = () => {
    return (
        <View style={{
            ...styles.activityContainer
          }}>
              <ActivityIndicator
              size={30}
              color='gray'
              />
                  <Text>Cargando....</Text>
          </View>
    )
}


const styles = StyleSheet.create({
    activityContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    }
    });