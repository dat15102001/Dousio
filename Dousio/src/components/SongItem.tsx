import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Box from '@/components/Box'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'
import FastImage from 'react-native-fast-image'

export interface ISongItem {
  thumbnail: string
  title: string
  artists_names: string
  onPress: () => void
}

const SongItem = (props: ISongItem) => {
  const { thumbnail, title, artists_names, onPress } = props
  return (
    <TouchableOpacity onPress={onPress}>
      <Box row align="center">
        <FastImage
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: thumbnail,
          }}
        />
        <Box marginLeft={12}>
          <Box>
            <AppText fontSize={15} fontWeight="600" color={Colors.white}>
              {title}
            </AppText>
            <AppText fontSize={13} fontWeight="500" color={Colors.gray606060}>
              {artists_names}
            </AppText>
          </Box>
        </Box>
      </Box>
    </TouchableOpacity>
  )
}

export default SongItem

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
})
