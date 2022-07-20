import React, { useContext } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';
import { useState } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const PullToRefresh = () => {
    const { theme: { colors } } = useContext(ThemeContext);

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
                    progressBackgroundColor={colors.primary}
                    colors={['white','red','orange']}
                    //IOS
                    style={{backgroundColor:colors.primary}}
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
