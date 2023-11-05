import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'
import FastImage from 'react-native-fast-image'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppText from '@/components/AppText'
import Icon from '@/assets/svg/Icon'
import { Colors } from '@/theme'
import TrackPlayer from 'react-native-track-player'
import { IMusic } from '@/api/types'

interface IThumnail {
  music: IMusic
}
const Thumbnail = (props: IThumnail) => {
  const { music } = props
  const rotate = useSharedValue<number>(0)

  useEffect(() => {
    rotate.value = withRepeat(
      withTiming(360, {
        duration: 15000,
        easing: Easing.linear,
      }),
      -1,
    )
  }, [])

  const styleAnimated = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotate.value}deg` }],
    }
  })

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styleAnimated, styles.thumbnail]}
        source={{ uri: music.thumbnail }}
      />
      <View style={styles.view}>
        <TouchableOpacity>
          <Icon iconName="share-music" />
        </TouchableOpacity>
        <View style={styles.viewNameMusic}>
          <AppText fontSize={16} fontWeight="500" color={Colors.white} numberOfLines={1}>
            {music.title}
          </AppText>
          <AppText fontSize={16} fontWeight="500" color={Colors.grayBDB7B7} numberOfLines={1}>
            {music.artists_names}
          </AppText>
        </View>
        <TouchableOpacity>
          <Icon iconName="favorite-tab" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Thumbnail

const { width } = Dimensions.get('screen')

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  thumbnail: {
    width: width - 100,
    height: width - 100,
    borderRadius: (width - 100) / 2,
  },
  view: {
    width: '100%',
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
