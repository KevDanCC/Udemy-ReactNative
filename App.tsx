import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from './src/context/themeContext/ThemeContext'
import { Navigator } from './src/navigator/Navigator'

// const customTheme:Theme={
// dark:true,
// colors:{
//   ...DarkTheme.colors,
//   // primary: 'rgb(255, 45, 85)',
//   // background: 'yellow',
//   // card: 'rgb(255, 255, 255)',
//   // text: 'rgb(28, 28, 30)',
//   // border: 'rgb(199, 199, 204)',
//   // notification: 'rgb(255, 69, 58)',
// }
// }

export const App = () => {
  return (
    <AppState>
        <Navigator />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App;
