import React, { CSSProperties } from 'react'
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../theme/appTheme';

interface Props {
    title: string,
    styleProp?:Object,
}

export const HeaderTitle = ({title,styleProp}:Props) => {
    const { top } = useSafeAreaInsets();
    console.log(styleProp, title);
    return (
        <View style={[{ marginTop: top + 20, marginBottom: 20},styleProp   ]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
