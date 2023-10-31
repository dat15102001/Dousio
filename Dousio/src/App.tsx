/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './redux/hooks'
import { selectAppInfo, setSplash } from './redux/AppInfo/slice'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { PersistGate } from 'redux-persist/integration/react'
import store, { persistor } from './redux/store'
import { Provider } from 'react-redux'
import Box from './components/Box'
import AppButton from './components/AppButton'
import AppText from './components/AppText'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Layout } from './theme'
import { PortalProvider } from '@gorhom/portal'
import Animated, { FadeIn } from 'react-native-reanimated'
import { useAppInfoIsSplash } from './redux/AppInfo/hooks'
import MainStack from './navigation/MainStack'
import Navigator from './navigation'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RenderApp />
      </PersistGate>
    </Provider>
  )
}

const RenderApp = React.memo(() => {
  const appInfo = useAppSelector(selectAppInfo)

  const dispatch = useAppDispatch()

  const onHandleSkipIntro = () => {
    dispatch(setSplash(true))
  }

  const isSplash = useAppInfoIsSplash()

  useEffect(() => {
    console.log('check intro 3', isSplash)
  }, [])

  return (
    <GestureHandlerRootView style={Layout.fill}>
      <SafeAreaProvider>
        <PortalProvider>
          <Animated.View style={Layout.fill} entering={FadeIn}>
            <Navigator />
          </Animated.View>
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
})

export default App
