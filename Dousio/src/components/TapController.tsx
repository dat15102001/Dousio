import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { memo, useCallback, useMemo } from 'react'
import {
  Gesture,
  GestureDetector,
  GestureStateChangeEvent,
  TapGestureHandlerEventPayload,
} from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

interface ITapControllerProps {
  onPress:
    | ((e: GestureStateChangeEvent<TapGestureHandlerEventPayload>) => void)
    | null
  style?: StyleProp<ViewStyle>
  children?: React.ReactNode
}

const hitSlop = { left: 8, bottom: 4, right: 8, top: 4 }

const TapController: React.FC<ITapControllerProps> = ({
  onPress,
  style,
  children
}) => {
  const onEnd = useCallback(
    (e, success) => {
      if (success && onPress) {
        onPress(e)
      }
    },
    [onPress],
  )

  const gesture = useMemo(() => Gesture.Tap().onEnd(onEnd), [onEnd])

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View hitSlop={hitSlop} style={style}>
        {children}
      </Animated.View>
    </GestureDetector>
  )
}

export default memo(TapController)

const styles = StyleSheet.create({})
