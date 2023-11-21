import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import MusicItem from '@/screens/Music/components/MusicItem'
import { IMusic } from '@/api/types'
import Box from '@/components/Box'
import _ from 'lodash'
import TrackPlayer from 'react-native-track-player'
import MusicItemPlaceHolder from '@/screens/Music/components/MusicItemPlaceHolder'

interface IRelatedSongs {
  thumnail: string
  title: string
  artistNames: string
  listRelatedSongs: IMusic[]
  onPressItem: () => void
}

const RelatedSongs = (props: IRelatedSongs) => {
  const { thumnail, title, artistNames, listRelatedSongs, onPressItem } = props

  const renderItemMusic = () => {
    return _.map(listRelatedSongs, (item, index) => {
      const onPressItemMusic = async () => {
        await TrackPlayer.skip(index)
      }
      return (
        <>
          {listRelatedSongs.length > 0 ? (
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

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <MusicItem
        artists_names={artistNames}
        title={title}
        thumbnail={thumnail}
        onPress={onPressItem}
      />
      {renderItemMusic()}
    </ScrollView>
  )
}

export default RelatedSongs

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: width,
    height: 530,
    paddingHorizontal: 20,
  },
})
