import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect, useMemo, useRef } from 'react'
import BottomTab from './BottomTab'
import Box from '@/components/Box'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainNavigationParamList } from './types'

const Stack = createStackNavigator<MainNavigationParamList>()

const MainStack = () => {

  const nodeRef = useRef<View | null>(null)
  
  const screenOptions = useMemo(
    () => ({
      headerShown: false,
      headerStyle: {
        shadowColor: 'transparent',
      },
    }),
    [],
  )

  // const initialRouteName = useMemo(
  //   () => (isSplash ? routesMain.BottomTab : routesMain.SplashScreen),
  //   [isSplash],
  // )

  return (
    <Box ref={nodeRef} flex={1}>
      <Stack.Navigator
        screenOptions={screenOptions}
        initialRouteName='BottomTab'>
        <Stack.Screen
          name='BottomTab'
          component={BottomTab}
          options={{ headerShown: false, gestureEnabled: false }}
        />
      </Stack.Navigator>
    </Box>
  )
}
export default MainStack
