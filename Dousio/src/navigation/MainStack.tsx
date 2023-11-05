import React, { useEffect, useMemo, useRef } from 'react'
import BottomTab from './BottomTab'
import Box from '@/components/Box'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { PageName } from './PageName'
import MusicPlayer from '@/screens/MusicPlayer'
import Search from '@/screens/Search'

const Stack = createStackNavigator()

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
        initialRouteName="BottomTab"
      >
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name={PageName.MusicPlayer}
          component={MusicPlayer}
        />
         <Stack.Screen
          name={PageName.Search}
          component={Search}
        />
      </Stack.Navigator>
    </Box>
  )
}
export default MainStack
