import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export const SwitchScreen = () => {

    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    });

    const onChange = (value: boolean, fieldToChange: string) => {
        setState({
            ...state,
            [fieldToChange]: value
        })
    }

    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={{ marginHorizontal: 20 }}>
            <HeaderTitle title='Switch' />

            <View style={styles.switchRow}>
                <Text style={[styles.switchText,{
                    color:colors.text
                }]}>isActive</Text>
                <CustomSwitch isOn={true} onChange={(value) => onChange(value, 'isActive')} />
            </View>
            <View style={styles.switchRow}>
                <Text style={[styles.switchText,{
                    color:colors.text
                }]}>isHungry</Text>
                <CustomSwitch isOn={false} onChange={(value) =>console.log('::::',value)} />
            </View>
            <View style={styles.switchRow}>
                <Text style={[styles.switchText,{
                    color:colors.text
                }]}>isHappy</Text>
                <CustomSwitch isOn={true} onChange={(value) => onChange(value, 'isHappy')} />
            </View>

            <Text style={[styles.switchText,{
                color:colors.text
            }]}>
                {JSON.stringify(state, null, 5)}
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    switchText: {
        fontSize: 25
    },
    switchRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

