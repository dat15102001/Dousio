import { useAppInfoScrollY } from '@/redux/AppInfo/hooks'
import { Colors, Layout, XStyleSheet } from '@/theme'
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const BottomTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const onPress = useCallback(
    (route: any, isFocused: boolean) => {
      if (route.name === 'Homepage') {
        if (isFocused && global.homeScrollview) {
          global.homeScrollview.scrollToIndex({ index: 0, animated: true })
        }
      }
      navigation.navigate(route)
    },
    [navigation],
  )

  const renderTabItem = useCallback(
    (route: any, index: number) => {
      const { options } = descriptors[route.key]
      const { tabBarIcon } = options
      const isFocused = state.index === index
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          style={[Layout.fill, Layout.center]}
          onPress={() => onPress(route, isFocused)}
          key={index}
        >
          {tabBarIcon({
            color: isFocused ? Colors.white : Colors.white,
            focused: isFocused,
            size: 10,
          })}
        </TouchableOpacity>
      )
    },
    [descriptors],
  )
  const { bottom } = useSafeAreaInsets()

  const scrollY = useAppInfoScrollY()
  const [currentScrollY, setCurrentScrollY] = useState(scrollY)

  useEffect(()=> {
    console.log('y =', scrollY);
  }, [scrollY])

  // const styleAnimated = useAnimatedStyle(() => {
  //   const inputRange = [
  //     0,
  //     scrollY,
  //     0,
  //   ]
  //   const bottom = interpolate(
  //     scrollY,
  //     inputRange,
  //     [0, -75, 0],
  //     Extrapolate.CLAMP,
  //   )
  //   console.log("bottom =", bottom);
    
  //   return {
  //     bottom: bottom,
  //   }
  // })

  return (
    // { bottom: bottom > 0 ? -75 : -60 }
    <Animated.View style={[styles.rootView]}>
      <View
        style={[
          styles.tabBarView,
          {
            height: 60 + (bottom > 0 ? 10 : 0),
            // backgroundColor: 'red',
          },
        ]}
      >
        {state.routes.map(renderTabItem)}
      </View>
    </Animated.View>
  )
}

export default memo(BottomTabBar)

const styles = XStyleSheet.create({
  rootView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Colors.black,
    zIndex: 99,
    borderTopColor: Colors.gray363636,
    borderWidth: 1,
  },
  tabBarView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  createBtn: {
    marginBottom: 50,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 99,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: Colors.white,
  },
})
