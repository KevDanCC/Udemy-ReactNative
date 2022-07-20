import React, { useContext, useState } from 'react'
import { View, Switch, Platform } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean,
    onChange:(isEnabled:boolean)=>void;
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {
    const { theme: { colors } } = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled),
        console.log(!isEnabled);
        onChange(!isEnabled)
    };
    return (
        <Switch 
        trackColor={{ false: colors.card, true: colors.primary }}
        thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
        />
    )
}
