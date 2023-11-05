import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import MusicHeader from './components/MusicHeader'
import Thumbnail from './components/Thumbnail'
import Padding from '@/components/Padding'
import ControllerMusic from './components/ControllerMusic'
import { IMusic } from '@/api/types'
import { getMusic } from '@/api/music'
import TrackPlayer, {
  AppKilledPlaybackBehavior,
  Capability,
} from 'react-native-track-player'
import _ from 'lodash'
import { useNavigation } from '@react-navigation/native'

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

const MusicPlayer = ({ route }) => {
  const [listMusic, setListMusic] = useState<IMusic[]>(route.params.listMusic)
  const [music, setMusic] = useState<IMusic>(
    route.params.listMusic[route.params.index],
  )
  const navigation = useNavigation()

  // const fetchMusic = async () => {
  //   try {
  //     const result = await getMusic()
  //     setListMusic(result.data)
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //   }
  // }

  // const getData = useCallback(() => {
  //   Promise.all([fetchMusic()])
  // }, [])

  const setUpTracks = async () => {
    try {
      const trackPlayer = _.map(route.params.listMusic, item => {
        return { ...item, url: item.source[128] }
      })
      await TrackPlayer.setupPlayer()
      if (trackPlayer.length > 0) {
        await TrackPlayer.add(trackPlayer)
      }
      await TrackPlayer.play()
    } catch (e) {}
  }

  useEffect(() => {
    // if (listMusic.length > 0) {
    setUpTracks()
    // }
  }, [])

  // useEffect(getData, [getData])

  const onPressBackBtn = () => {
    navigation.goBack()
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      <MusicHeader onPressBackBtn={onPressBackBtn} />
      <Padding top={30} />
      {music && <Thumbnail music={music} />}
      <ControllerMusic listMusic={listMusic} setMusic={setMusic} />
    </View>
  )
}

export default MusicPlayer

const styles = StyleSheet.create({})
