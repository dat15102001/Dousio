import { Dimensions, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import MusicHeader from './components/MusicHeader'
import Thumbnail from './components/Thumbnail'
import ControllerMusic from './components/ControllerMusic'
import { IMusic } from '@/api/types'
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player'
import _ from 'lodash'
import { useNavigation } from '@react-navigation/native'
import LyricSong from './components/LyricSong'
import RelatedSongs from './components/RelatedSongs'
import Panigator from '@/components/Panigator'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated'
import { ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { useIndexSong } from '@/redux/Music/hooks'
TrackPlayer.updateOptions({
  // Media controls capabilities
  stoppingAppPausesPlayback: false,
  android: {
    appKilledPlaybackBehavior:
      AppKilledPlaybackBehavior.StopPlaybackAndRemoveNotification,
  },
  capabilities: [
    Capability.Play,
    Capability.Pause,
    Capability.SkipToNext,
    Capability.SkipToPrevious,
    Capability.Stop,
  ],

  // Capabilities that will show up when the notification is in the compact form on Android
  compactCapabilities: [Capability.Play, Capability.Pause],
})
const { width } = Dimensions.get('screen')
const MusicPlayer = ({ route }) => {
  const [listSong, setListSong] = useState<IMusic[]>(route.params.song)
  const [music, setMusic] = useState<IMusic>(
    route.params.song[route.params.index],
  )
  const [indexTabView, setIndexTabView] = useState<number>(1)
  const scrollX = useSharedValue<number>(width)
  const navigation = useNavigation()
  const heightController = useSharedValue<number>(0)
  const scrollRef = useRef<Animated.ScrollView>()
  const opacity = useSharedValue<number>(0)
  const indexSong = useIndexSong()
  useEffect(() => {
    console.log('index song =', indexSong)
  }, [indexSong])

  const setUpTracks = async () => {
    try {
      const trackPlayer = _.map(route.params.song, item => {
        return { ...item, url: item.source['128'] }
      })
      await TrackPlayer.setupPlayer()
      if (trackPlayer.length > 0) {
        await TrackPlayer.add(trackPlayer)
      }
      await TrackPlayer.skip(route.params.index)
      await TrackPlayer.play()
    } catch (e) {}
  }

  useEffect(() => {
    setUpTracks()
  }, [])

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    // Xử lý sự kiện kết thúc bài hát ở đây
    setMusic(listSong[event.nextTrack])
  })

  const onPressBackBtn = () => {
    navigation.goBack()
  }

  const RelatedSongsScreen = useCallback(() => {
    return (
      <RelatedSongs
        artistNames={music.artists_names}
        thumnail={music.thumbnail}
        title={music.title}
        onPressItem={() =>
          scrollRef.current.scrollTo({ x: width, animated: false })
        }
        listRelatedSongs={listSong}
      />
    )
  }, [])

  const ThumbnailScreen = useCallback(() => {
    return <Thumbnail music={music} opacity={opacity} />
  }, [music])

  const LyricSongScreen = useCallback(() => {
    return (
      <LyricSong
        artistNames={music.artists_names}
        thumnail={music.thumbnail}
        title={music.title}
        lyricUrl={music.lyric}
      />
    )
  }, [])

  const handleLayout = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ x: width, animated: false })
    }
  }

  return (
    <View style={styles.container}>
      <MusicHeader onPressBackBtn={onPressBackBtn} />
      <Panigator
        item={[1, 2, 3]}
        scrollX={scrollX}
        currentIndex={indexTabView}
      />
      <Animated.ScrollView
        ref={scrollRef}
        style={styles.scrollTabView}
        horizontal
        snapToAlignment="center"
        pagingEnabled
        onLayout={handleLayout}
        onScroll={event => {
          scrollX.value = event.nativeEvent.contentOffset.x
          const height = interpolate(
            scrollX.value,
            [0, indexTabView * width, (indexTabView + 1) * width],
            [70, 150, 70],
          )
          heightController.value = height
        }}
        keyExtractor={(_, index) => index.toString()}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        <RelatedSongsScreen />
        <ThumbnailScreen />
        <LyricSongScreen />
      </Animated.ScrollView>
      <ControllerMusic
        listSong={listSong}
        setMusic={setMusic}
        scrollX={scrollX}
        heightController={heightController}
        song={music}
        indexSong={route.params.index}
        opacity={opacity}
      />
    </View>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  scrollTabView: {
    flex: 1,
    position: 'absolute',
    right: 0,
    left: 0,
    bottom: 0,
    top: 100,
  },
})
