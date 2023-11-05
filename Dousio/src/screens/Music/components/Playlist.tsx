import { Dimensions, StyleSheet, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import PlaylistItem, { IPlaylistItem } from './PlaylistItem'
import Box from '@/components/Box'
import _ from 'lodash'
import CreatePlaylist from './CreatePlaylist'
import Padding from '@/components/Padding'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'
import MusicItem from './MusicItem'
import { IMusic } from '@/api/types'
import { getMusic } from '@/api/music'
import { PageName } from '@/navigation/PageName'
import { navigate } from '@/navigation/navigationHelper'
import MusicItemPlaceHolder from './MusicItemPlaceHolder'
import TrackPlayer from 'react-native-track-player'

const Playlist = () => {
  const listPlaylist: [IPlaylistItem] = [
    {
      url: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/ve-luffy-1.jpg',
      title: 'GO',
      author: 'naksu',
    },
  ]

  const [listMusic, setListMusic] = useState<IMusic[]>([])
  const [isLoading, setLoading] = useState<boolean>(true)

  const fetchMusic = async () => {
    try {
      const result = await getMusic()
      setListMusic(result.data)
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  const getData = useCallback(() => {
    Promise.all([fetchMusic()]).then(() => {
      setLoading(false)
    })
  }, [])

  useEffect(getData, [getData])

  const setUpTracks = async () => {
    try {
      const trackPlayer = _.map(listMusic, item => {
        return { ...item, url: item.source[128] }
      })
      await TrackPlayer.setupPlayer()
      await TrackPlayer.add(trackPlayer)
    } catch (e) {}
  }

  useEffect(() => {
    if (listMusic.length > 0) {
      setUpTracks()
    }
  }, [])

  const renderItemMusic = () => {
    if (isLoading) {
      return (
        <Box marginTop={12}>
          <MusicItemPlaceHolder />
        </Box>
      )
    } else {
      return _.map(listMusic, (item, index) => {
        const onPressItemMusic = async () => {
          navigate(PageName.MusicPlayer, { listMusic: listMusic, index: index })
          if (index > (await TrackPlayer.getActiveTrackIndex())) {
            await TrackPlayer.stop()
            await TrackPlayer.skipToNext(index)
            await TrackPlayer.play()
          } else if (index < (await TrackPlayer.getActiveTrackIndex())) {
            await TrackPlayer.stop()
            await TrackPlayer.skipToPrevious(index)
            await TrackPlayer.play()
          } else {
            await TrackPlayer.play()
          }
        }
        return (
          <Box marginTop={index > 0 ? 12 : 12} key={index}>
            <MusicItem
              thumbnail={item.thumbnail}
              title={item.title}
              artists_names={item.artists_names}
              key={index}
              onPress={onPressItemMusic}
            />
          </Box>
        )
      })
    }
  }

  return (
    <Box
      style={{ width: Dimensions.get('screen').width }}
      paddingHorizontal={12}
    >
      <CreatePlaylist />
      <Padding top={12} />
      {_.map(listPlaylist, (item, index) => {
        return (
          <PlaylistItem
            url={item.url}
            title={item.title}
            author={item.author}
            key={index}
          />
        )
      })}
      <Box marginTop={12}>
        <AppText fontWeight="600" fontSize={16} color={Colors.white}>
          Đang được nghe nhiều
        </AppText>
        {renderItemMusic()}
      </Box>
      <Padding top={12} />
    </Box>
  )
}

export default Playlist

const styles = StyleSheet.create({})
