import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { ThemeContext } from '../context/themeContext/ThemeContext';
import { MenuItem } from '../interfaces/appInterfaces';
interface Props {
    menuItem: MenuItem
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const navigation = useNavigation();
    // const {colors}= useTheme();
    const {theme:{colors}}=useContext(ThemeContext);

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={()=>navigation.navigate(menuItem.component as never)}
        >
            <View style={styles.container}>
                <Icon
                    name={menuItem.icon}
                    color={colors.primary}
                    size={23}
                />
                <Text
                    style={{
                        ...styles.itemText,
                        color:colors.text
                    }}
                >
                    {menuItem.name}
                </Text>
                <Icon
                    style={styles.lastArrow}
                    name='chevron-forward-outline'
                    color={colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19
    },
    lastArrow: {
        flex: 1,
        textAlign: 'right'
    }
});