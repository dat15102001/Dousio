import { Dimensions, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import TrackPlayer, {
  Capability,
  RepeatMode,
  useProgress,
} from 'react-native-track-player'
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated'
import { Slider, SliderThemeType } from 'react-native-awesome-slider'
import { Colors } from '@/theme'
import { secondsToHHMMSS } from '@/commons'
import AppText from '@/components/AppText'
import ICRandom from '@/assets/svg/ICShuffle'
import Icon from '@/assets/svg/Icon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { IMusic } from '@/api/types'
import _ from 'lodash'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const { width } = Dimensions.get('screen')

interface IControllerMusic {
  listMusic: IMusic[]
  setMusic: any
}

const ControllerMusic = (props: IControllerMusic) => {
  const { listMusic, setMusic } = props
  const progress = useSharedValue<number>(0)
  const min = useSharedValue<number>(0)
  const max = useSharedValue<number>(200)
  const isScrubbing = useSharedValue<boolean>(true)
  const thumbWidthScale = useSharedValue<number>(1)
  const [thumbWidth, setThumbWidth] = useState<number>(10)
  const [sliding, setSliding] = useState<boolean>(false)
  const [isPlay, setPlay] = useState<boolean>(true)
  const [isShuffle, setShuffle] = useState<boolean>(false)
  const [isLoop, setLoop] = useState<boolean>(false)

  const { position, buffered, duration } = useProgress()

  const paddingBottom = useMemo(() => {
    return { bottom: 100 }
  }, [])

  const theme: SliderThemeType = {
    minimumTrackTintColor: Colors.white,
    maximumTrackTintColor: Colors.gray606060,
    cacheTrackTintColor: Colors.grayBDB7B7,
    // bubbleBackgroundColor: Colors.error,
    // disableMinTrackTintColor: Colors.black50,
  }

  const setMaximumValue = useCallback(async () => {
    const maximumValue = await TrackPlayer.getProgress().then(
      progress => progress.duration,
    )
    max.value = maximumValue
  }, [])

  useEffect(() => {
    setMaximumValue()
  }, [duration])

  useEffect(() => {
    // Cập nhật thời gian phát hiện tại mỗi giây
    const interval = setInterval(async () => {
      const currentPosition = await TrackPlayer.getProgress().then(
        progress => progress.position,
      )
      if (!sliding) {
        progress.value = withTiming(currentPosition)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [sliding])

  const onSlidingStart = () => {
    setThumbWidth(15)
    setSliding(true)
  }

  const onSlidingComplete = value => {
    TrackPlayer.seekTo(value)
    setThumbWidth(10)
    setSliding(false)
  }

  const onPressBtnPlay = async () => {
    setPlay(!isPlay)
    isPlay === true ? TrackPlayer.pause() : TrackPlayer.play()
  }

  const onPressBtnShuffle = () => {
    setShuffle(!isShuffle)
  }

  const onPressBtnLoop = () => {
    setLoop(prevIsLoop => {
      const newIsLoop = !prevIsLoop
      newIsLoop
        ? TrackPlayer.setRepeatMode(RepeatMode.Track)
        : TrackPlayer.setRepeatMode(RepeatMode.Off)
      return newIsLoop
    })
  }

  const onPressBtnPrev = async () => {
    TrackPlayer.skipToPrevious()
    setMusic(listMusic[await TrackPlayer.getActiveTrackIndex()])
    TrackPlayer.play()
  }

  const onPressBtnNext = async () => {
    TrackPlayer.skipToNext()
    setMusic(listMusic[await TrackPlayer.getActiveTrackIndex()])
    TrackPlayer.play()
  }

  return (
    <View style={[styles.container, paddingBottom]}>
      <Slider
        style={{ width: width - 60, backgroundColor: 'red' }}
        minimumValue={min}
        maximumValue={max}
        progress={progress}
        theme={theme}
        sliderHeight={3}
        isScrubbing={isScrubbing}
        bubble={secondsToHHMMSS}
        renderBubble={() => {
          return <></>
        }}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
        thumbWidth={thumbWidth}
        thumbScaleValue={thumbWidthScale}
      />
      <View style={styles.viewTime}>
        <AppText fontSize={12} fontWeight="400" color={Colors.graya8a8a8}>
          {secondsToHHMMSS(position)}
        </AppText>
        <AppText fontSize={12} fontWeight="400" color={Colors.graya8a8a8}>
          {secondsToHHMMSS(duration)}
        </AppText>
      </View>
      <View style={styles.viewIconController}>
        <TouchableOpacity onPress={onPressBtnShuffle}>
          <Icon
            color={isShuffle ? Colors.kFF6D28 : Colors.white}
            size={28}
            iconName="shuffle"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBtnPrev}>
          <Icon size={26} iconName="prev" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBtnPlay}>
          <Icon size={50} iconName={isPlay ? 'pause' : 'play'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBtnNext}>
          <Icon size={26} iconName="next" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBtnLoop}>
          <Icon
            color={isLoop ? Colors.kFF6D28 : Colors.white}
            size={28}
            iconName="loop"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ControllerMusic

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 30,
    position: 'absolute',
  },
  viewTime: {
    width: width,
    flexDirection: 'row',
    marginTop: 12,
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  viewIconController: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 30,
    alignItems: 'center',
  },
})
