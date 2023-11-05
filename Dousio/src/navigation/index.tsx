import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './MainStack'
import { refNavigation } from './navigationHelper'

const Navigator = () => {
  return (
    <NavigationContainer ref={refNavigation}>
      <MainStack />
    </NavigationContainer>
  )
}

export default Navigator
