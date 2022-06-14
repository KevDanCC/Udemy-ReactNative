import React from 'react'
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';

export const PullToRefresh = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);
        console.log('Terminado');
        setTimeout(() => {
            setRefreshing(false);
            setData('Hola mundo')
        }, 3500);
    }
    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor="#5856D6"
                    colors={['white','red','orange']}
                    //IOS
                    style={{backgroundColor:"#5856D6"}}
                    title='Refreshinggg.....'

                    tintColor="white"
                />
            }
        >

            <View style={styles.globalMargin}>
                <HeaderTitle title='Pull to Refresh' />
                {data && <HeaderTitle title={data} />}
                
            </View>
        </ScrollView>
    )
}
