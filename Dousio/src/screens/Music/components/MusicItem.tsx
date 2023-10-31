import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import React, { useEffect } from 'react'
import Box from '@/components/Box'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'
import FastImage from 'react-native-fast-image'
import TrackPlayer, { Capability } from 'react-native-track-player'
import AppBottomSheet from '@/components/AppBottomSheet'

export interface IPlaylistItem {
  url: string
  title: string
  author: string
}

export const tracks = [
  {
    id: '1',
    url: require('../../../assets/musics/ngonngang_suy_mck.mp3'),
    title: 'Keys of moon',
    artist: 'The Epic Hero',
    artwork: 'https://picsum.photos/id/1003/200/300',
    album: 'hi',
    duration: 149,
  },
]

TrackPlayer.updateOptions({
  // Media controls capabilities
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

const MusicItem = (props: IPlaylistItem) => {
  const { url, title, author } = props

  const setUpTracks = async () => {
    try {
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add(tracks)
    } catch (e) {}
  }

  useEffect(() => {
    setUpTracks()
  }, [])

  const onPlayMusic = async () => {
    const track = await TrackPlayer.getTrack(0)
    console.log('track=', track.url)
    TrackPlayer.play()
  }

  return (
    <TouchableOpacity onPress={onPlayMusic}>
      <Box row align="center">
        <FastImage
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: url,
          }}
        />
        <Box marginLeft={12}>
          <Box>
            <AppText fontSize={15} fontWeight="600" color={Colors.white}>
              {title}
            </AppText>
            <AppText fontSize={13} fontWeight="500" color={Colors.gray606060}>
              {author}
            </AppText>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default MusicItem

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
})
