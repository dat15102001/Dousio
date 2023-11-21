import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppText from '@/components/AppText'
import Icon from '@/assets/svg/Icon'
import { Colors } from '@/theme'
import { IMusic } from '@/api/types'
import { useLottieMusic, useRotateThumnailMusic } from '@/redux/Music/hooks'
import LottieView from 'lottie-react-native'

interface IThumnail {
  music: IMusic
  opacity:any
}
const Thumbnail = (props: IThumnail) => {
  const { music, opacity } = props
  const rotate = useSharedValue<number>(0)
  const isRotate = useRotateThumnailMusic()

  useEffect(() => {
    if (isRotate) {
      rotate.value = withRepeat(
        withTiming(360, {
          duration: 15000,
          easing: Easing.linear,
        }),
        -1,
      )
    } else {
      rotate.value = withRepeat(
        withTiming(rotate.value, { duration: 0, easing: Easing.linear }),
      )
    }
  }, [isRotate])

  const styleAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
      opacity: opacity.value,
    }
  })

  const isLottie = useLottieMusic()

  const lottieRef = useRef<any>()

  useEffect(() => {
    isLottie ? lottieRef.current.play() : lottieRef.current.pause()
  }, [isLottie])

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styleAnimated, styles.thumbnail]}
        source={{
          uri: music.thumbnail,
        }}
      />
      <View style={styles.view}>
        <TouchableOpacity>
          <Icon iconName="share-music" />
        </TouchableOpacity>
        <View style={styles.viewNameMusic}>
          <AppText
            fontSize={16}
            fontWeight="500"
            color={Colors.white}
            numberOfLines={1}>
            {music.title}
          </AppText>
          <AppText
            fontSize={16}
            fontWeight="500"
            color={Colors.grayBDB7B7}
            numberOfLines={1}>
            {music.artists_names}
          </AppText>
        </View>
        <TouchableOpacity>
          <Icon iconName="favorite-tab" />
        </TouchableOpacity>
      </View>
      <LottieView
        ref={lottieRef}
        source={require('../../../assets/lotties/music.json')}
        autoPlay={false}
        loop
        style={{ width: 1000, height: 150, marginTop: -25 }}
      />
    </View>
  )
}

export default Thumbnail

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    width: width,
    alignItems: 'center',
    marginTop: 30,
  },
  thumbnail: {
    width: width - 100,
    height: width - 100,
    borderRadius: (width - 100) / 2,
  },
  view: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginTop: 20,
  },
  viewNameMusic: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
  },
})
