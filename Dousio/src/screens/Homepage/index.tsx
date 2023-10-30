import {
  Animated,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
} from 'react-native'
import React, { memo, useEffect, useRef } from 'react'
import Box from '@/components/Box'
import { Colors } from '@/theme'
import HomeHeader from './components/HomeHeader'
import StoryMenu from './components/StoryMenu'
import PostItem from '@/components/PostItem'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import Padding from '@/components/Padding'

const data = [{}, {}]
const CONTAINER_HEIGHT = 80
const Homepage = () => {
  const tabBarHeight = useBottomTabBarHeight()
  const scrollViewRef = useRef<FlatList>(null)

  const scrollY = useRef(new Animated.Value(0)).current
  const clampedScroll = Animated.diffClamp(
    scrollY.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolateLeft: 'clamp',
    }),
    0,
    CONTAINER_HEIGHT,
  )

  const headerTranslate = clampedScroll.interpolate({
    inputRange: [0, CONTAINER_HEIGHT],
    outputRange: [0, -CONTAINER_HEIGHT],
    extrapolate: 'clamp',
  })

  useEffect(() => {
    console.log('check change');
  }, [clampedScroll])

  return (
    <Box flex={1} backgroundColor={Colors.black}>
      <HomeHeader />
      <Animated.FlatList
        ref={scrollViewRef}
        ListHeaderComponent={<StoryMenu />}
        ListFooterComponent={<Padding bottom={tabBarHeight + 30} />}
        renderItem={() => {
          return <PostItem />
        }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        data={data}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
      />
      {/* <Animated.View
        style={[
          styles.view,
          {
            top: 0,
            backgroundColor: 'red',
            transform: [{ translateY: headerTranslate }],
          },
        ]}
      >
        <Text>OKOK</Text>
      </Animated.View> */}
    </Box>
  )
}

export default memo(Homepage)

const styles = StyleSheet.create({
  view: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: CONTAINER_HEIGHT,
  },
})
