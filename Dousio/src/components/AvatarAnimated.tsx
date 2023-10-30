import React from 'react'
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native'
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import { TapGestureHandler, State } from 'react-native-gesture-handler'
import LinearGradient from 'react-native-linear-gradient'
import AppImage from './AppImage'
import { Colors } from '@/theme'
import Box from './Box'

const AvatarAnimated = ({ avatarSource }) => {
  const rotate = useSharedValue(0)

  const handleAvatarPress = event => {
    if ((rotate.value = 360)) {
      rotate.value = 0
    }
    if (event.nativeEvent.state === State.END) {
      rotate.value = withTiming(360, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      })
    }
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    }
  })

  return (
    <TapGestureHandler onHandlerStateChange={handleAvatarPress}>
      <Box center>
        <Animated.View style={[styles.linear, animatedStyle]}>
          <LinearGradient
            colors={[Colors.yellowffc901, Colors.pinkd300c5]}
            style={[styles.linear]}
          />
        </Animated.View>
        <AppImage source={{ uri: avatarSource }} style={styles.avatar} />
      </Box>
    </TapGestureHandler>
  )
}

const styles = StyleSheet.create({
  linear: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: 65,
    borderRadius: 40,
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: 'red',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#000',
  },
})

export default AvatarAnimated
