import { Dimensions, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import TrackPlayer, { RepeatMode, useProgress } from 'react-native-track-player'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
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
import { useAppDispatch } from '@/redux/hooks'
import { setIndexSong, setLottie, setRotateThumnail } from '@/redux/Music/slice'
import LottieView from 'lottie-react-native'

const { width } = Dimensions.get('screen')

interface IControllerMusic {
  listSong: IMusic[]
  setMusic: any
  song: IMusic
  scrollX: any
  heightController: any
  indexSong: number
  opacity: any
}

const ControllerMusic = (props: IControllerMusic) => {
  const {
    listSong,
    setMusic,
    heightController,
    scrollX,
    song,
    indexSong,
    opacity,
  } = props
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
  const [isNextButtonDisabled, setNextButtonDisabled] = useState<boolean>(false)
  const [isPrevButtonDisabled, setPrevButtonDisabled] = useState<boolean>(false)
  const { position, buffered, duration } = useProgress()
  const dispatch = useAppDispatch()

  const paddingBottom = useMemo(() => {
    return { bottom: 30 }
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

  // Trong useEffect, kiểm tra điều kiện và cập nhật biến trạng thái
  useEffect(() => {
    checkNextOrPrevDisable()
  }, [song])

  const checkNextOrPrevDisable = useCallback(async () => {
    if (listSong.length - 1 === indexSong) {
      setNextButtonDisabled(true)
    }
    if (listSong.length - 1 === (await TrackPlayer.getActiveTrackIndex())) {
      setNextButtonDisabled(true)
    } else {
      setNextButtonDisabled(false)
    }
    if ((await TrackPlayer.getActiveTrackIndex()) === 0) {
      setPrevButtonDisabled(true)
    } else {
      setPrevButtonDisabled(false)
    }
  }, [song])

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
    dispatch(setRotateThumnail(!isPlay))
    dispatch(setLottie(!isPlay))
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
    await TrackPlayer.play()
    setMusic(listSong[await TrackPlayer.getActiveTrackIndex()])
    dispatch(setIndexSong(await TrackPlayer.getActiveTrackIndex()))
    opacity.value = withSequence(
      withSpring(0, { duration: 200 }),
      withSpring(1, { duration: 1000 })
    )
  }

  const onPressBtnNext = async () => {
    TrackPlayer.skipToNext()
    await TrackPlayer.play()
    setMusic(listSong[await TrackPlayer.getActiveTrackIndex()])
    dispatch(setIndexSong(await TrackPlayer.getActiveTrackIndex()))
    opacity.value = withSequence(
      withSpring(0, { duration: 200 }),
      withSpring(1, { duration: 1000 })
    )
  }

  const styleAnimated = useAnimatedStyle(() => {
    return {
      height: heightController.value,
    }
  })

  return (
    <Animated.View style={[styles.container, paddingBottom, styleAnimated]}>
      <Slider
        style={styles.slider}
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
        <TouchableOpacity
          onPress={onPressBtnPrev}
          disabled={isPrevButtonDisabled}>
          <View style={{ opacity: isPrevButtonDisabled ? 0.5 : 1 }}>
            <Icon size={26} iconName="prev" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBtnPlay}>
          <Icon size={50} iconName={isPlay ? 'pause' : 'play'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onPressBtnNext}
          disabled={isNextButtonDisabled}>
          <View style={{ opacity: isNextButtonDisabled ? 0.5 : 1 }}>
            <Icon size={26} iconName="next" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressBtnLoop}>
          <Icon
            color={isLoop ? Colors.kFF6D28 : Colors.white}
            size={28}
            iconName="loop"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.viewIconController}>
        <TouchableOpacity onPress={() => {}}>
          <Icon iconName="chat" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon iconName="music-plus" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.viewQuanlity}>
            <AppText fontSize={12} fontWeight="800" color={Colors.grayBDB7B7}>
              320kbps
            </AppText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icon iconName="download" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            TrackPlayer.setRate(1)
          }}>
          <Icon iconName="speed" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  )
}

export default ControllerMusic

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
  },
  slider: {
    width: width - 60,
    marginTop: 12,
    height: 20,
  },
  viewTime: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  viewIconController: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 12,
    alignItems: 'center',
  },
  viewQuanlity: {
    backgroundColor: Colors.gray262626,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 8,
    opacity: 0.8,
  },
})
