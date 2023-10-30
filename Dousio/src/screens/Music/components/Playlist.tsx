import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import PlaylistItem, { IPlaylistItem } from './PlaylistItem'
import Box from '@/components/Box'
import _ from 'lodash'
import CreatePlaylist from './CreatePlaylist'
import Padding from '@/components/Padding'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'
import MusicItem from './MusicItem'

const Playlist = () => {
  const listPlaylist: [IPlaylistItem] = [
    {
      url: 'https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-6/386771384_852853839566366_1509608202667515193_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=s1Vcwlg9ISgAX_oc_0j&_nc_ht=scontent.fhan5-6.fna&oh=00_AfAj4K-XnXd5TDh_LajFtv-GgXYjEgdzdkOb6n0Hj6Wpsw&oe=65411D6F',
      title: 'GO',
      author: 'naksu',
    },
  ]

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
      </Box>
      <Padding top={12} />
      {_.map(listPlaylist, (item, index) => {
        return (
          <MusicItem
            url={item.url}
            title={item.title}
            author={item.author}
            key={index}
          />
        )
      })}
    </Box>
  )
}

export default Playlist

const styles = StyleSheet.create({})
