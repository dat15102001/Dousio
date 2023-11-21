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
import { getCodeSong, getMusic, getSong } from '@/api/music'
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

  const [isLoading, setLoading] = useState<boolean>(true)
  const [codeSong, setCodeSong] = useState([])
  const [song, setSong] = useState<IMusic[]>([])

  const fetchCodeSong = async () => {
    try {
      const result = await getCodeSong()
      setCodeSong(result.data)
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  const fetchSong = async (code: string) => {
    try {
      const result = await getSong(code)
      setSong(prev => prev.concat(result.data))
    } catch (error) {
      console.log(error)
    } finally {
    }
  }

  const getData = useCallback(() => {
    Promise.all([fetchCodeSong()]).then(() => {
      setLoading(false)
    })
  }, [])

  useEffect(getData, [getData])

  useEffect(() => {
    if (codeSong.length > 0) {
      _.map(codeSong, async item => {
        await fetchSong(item.code)
      })
    }
  }, [codeSong])

  const setUpTracks = async () => {
    try {
      const trackPlayer = _.map(song, item => {
        return { ...item, url: item.source["128"] }
      })
      await TrackPlayer.setupPlayer()
      if (trackPlayer.length > 0) {
        await TrackPlayer.add(trackPlayer)
      }
      await TrackPlayer.play()
    } catch (e) {}
  }

  useEffect(() => {
    if (song.length > 0) {
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
      return _.map(song, (item, index) => {
        const onPressItemMusic = async () => {
          navigate(PageName.MusicPlayer, { song: song, index: index })
          await TrackPlayer.skip(index)
          await TrackPlayer.play()
        }
        return (
          <>
            {song.length > 0 ? (
              <Box marginTop={index > 0 ? 12 : 12} key={index}>
                <MusicItem
                  thumbnail={item.thumbnail}
                  title={item.title}
                  artists_names={item.artists_names}
                  key={index}
                  onPress={onPressItemMusic}
                />
              </Box>
            ) : (
              <></>
            )}
          </>
        )
      })
    }
  }

  return (
    <Box
      style={{ width: Dimensions.get('screen').width }}
      paddingHorizontal={12}>
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
