import React, { useContext } from 'react'
import { Alert, Button, View } from 'react-native';

import prompt from 'react-native-prompt-android';

import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
  const { theme: { colors } } = useContext(ThemeContext);

  const showAlert = () => {
    Alert.alert(
      "Título",
      "Mensaje de la alerta",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Ok", onPress: () => console.log("OK Pressed") }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log("On Dismis")
      }
    );
  }

  const showPrompt = () => {
    // Alert.prompt(
    //   '¿Está Seguro?',
    //   'Esta accion no se puede revertir',
    //   (valor: string) => console.log('info:', valor),
    //   'plain-text',
    //   'Hola Default Text',
    //   'email-address'
    // )

    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder'
      }
    );
  }


  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title='Alerts' />

      <Button
        title='Mostrar Alerta'
        onPress={showAlert}
        color={colors.primary}
      />
      <View style={{ height: 10 }} />
      <Button
        title='Mostrar Prompt'
        onPress={showPrompt}
        color={colors.primary}
      />
    </View>
  )
}
