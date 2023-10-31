import { StyleSheet } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Box from './Box'
import Video from 'react-native-video'
import { Colors, Layout, screenWidth } from '@/theme'
import TapController from './TapController'
import ICMute from '@/assets/svg/ICMute'
import ICVolume from '@/assets/svg/ICVolume'
import Icon from '@/assets/svg/Icon'
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import { BlurView } from '@react-native-community/blur'
import AppText from './AppText'

interface IVideoItemProps {
  url: string
  currentIndex: number
  index: number
}

const VideoItem = (props: IVideoItemProps) => {
  const { url, currentIndex, index } = props
  const videoRef = useRef<Video>(null)
  const [paused, setPaused] = useState<boolean>(true)
  const [volume, setVolume] = useState<number>(1)
  const scaleIconPlay = useSharedValue<number>(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [totalDuration, setTotalDuration] = useState(0)

  useEffect(() => {
    setPaused(currentIndex !== index)
  }, [currentIndex])

  const onPlay = () => {
    setPaused(!paused)
    scaleIconPlay.value = 0
    const animationSequence = withSequence(
      withTiming(1, { duration: 200, easing: Easing.inOut(Easing.ease) }),
      withDelay(
        200,
        withTiming(1.1, { duration: 200, easing: Easing.inOut(Easing.ease) }),
      ),
      withTiming(0, { duration: 300, easing: Easing.inOut(Easing.ease) }),
    )
    scaleIconPlay.value = animationSequence
  }

  const onMute = () => {
    setVolume(volume === 1 ? 0 : 1)
  }

  const stylePlayAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleIconPlay.value }],
    }
  })

  const handleProgress = progress => {
    setCurrentTime(progress.currentTime)
  }

  const handleLoad = meta => {
    setTotalDuration(meta.duration)
  }

  return (
    <TapController onPress={onPlay}>
      <Video
        ref={videoRef}
        style={{ width: screenWidth, height: 590 }}
        resizeMode="contain"
        repeat
        paused={paused}
        volume={volume}
        source={{
          uri: url,
        }}
        // onProgress={handleProgress}
        // onLoad={handleLoad}
      />
      <Box
        center
        style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0 }}
      >
        <Animated.View style={[styles.iconPlay, stylePlayAnimated]}>
          <BlurView style={styles.blurViewPlay} blurAmount={1} blurType="dark">
            <Icon iconName={paused ? 'play' : 'pause'} />
          </BlurView>
        </Animated.View>
      </Box>
      {/* <AppText color="white">{currentTime}</AppText>
      <AppText color="white">{totalDuration}</AppText> */}
      <TapController onPress={onMute}>
        <BlurView blurAmount={5} blurType="dark" style={styles.blurViewVolume}>
          <Icon iconName={volume === 1 ? 'volume' : 'mute'} size={12} />
        </BlurView>
      </TapController>
    </TapController>
  )
}

export default VideoItem

const styles = StyleSheet.create({
  iconPlay: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurViewPlay: {
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  blurViewVolume: {
    width: 32,
    height: 32,
    borderRadius: 16,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
