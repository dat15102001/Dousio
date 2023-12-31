import React from 'react'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import MainStack from './MainStack'

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}

export default Navigator
