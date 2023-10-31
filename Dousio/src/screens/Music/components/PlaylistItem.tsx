import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@/components/Box'
import AppImage from '@/components/AppImage'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'

export interface IPlaylistItem {
  url: string
  title: string
  author: string
}
const PlaylistItem = (props: IPlaylistItem) => {
  const { url, title, author } = props
  return (
    <Box row align="center">
      <AppImage
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: url,
        }}
      />
      <Box marginLeft={12}>
        <AppText fontSize={15} fontWeight="600" color={Colors.white}>
          {title}
        </AppText>
        <AppText fontSize={13} fontWeight="500" color={Colors.gray606060}>
          {author}
        </AppText>
      </Box>
    </Box>
  )
}

export default PlaylistItem

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
})
