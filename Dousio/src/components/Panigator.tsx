import { StyleSheet, View, useWindowDimensions } from 'react-native'
import React from 'react'
import { Colors } from '@/theme'
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated'

interface IPanigator {
  item: any
  scrollX: any
  currentIndex: number
}

const Panigator = (props: IPanigator) => {
  const { item, scrollX, currentIndex } = props
  const { width } = useWindowDimensions()

  return (
    <View style={styles.container}>
      {item.map((_: any, index: number) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ]
        const styleAnimated = useAnimatedStyle(() => {
          const dotWidth = interpolate(
            scrollX.value,
            inputRange,
            [5, 6.5, 5],
            Extrapolate.CLAMP,
          )
          const opacity = interpolate(
            scrollX.value,
            inputRange,
            [0.3, 1, 0.3],
            Extrapolate.CLAMP,
          )
          return {
            width: dotWidth,
            height: dotWidth,
            opacity: opacity,
            borderRadius: dotWidth / 2,
          }
        })

        return (
          <Animated.View
            style={[styles.dot, styleAnimated]}
            key={index.toString()}
          />
        )
      })}
    </View>
  )
}

export default Panigator

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: Colors.white,
    marginHorizontal: 2,
  },
})
