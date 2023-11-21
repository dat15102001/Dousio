import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import MusicItem from '@/screens/Music/components/MusicItem'
import { IMusic } from '@/api/types'
import { getLyricSong } from '@/api/music'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'
import { ScrollView } from 'react-native-gesture-handler'

interface ILyricSong {
  thumnail: string
  title: string
  artistNames: string
  lyricUrl: string
}
const LyricSong = (props: ILyricSong) => {
  const { thumnail, title, artistNames, lyricUrl } = props
  const [lyric, setLyric] = useState<string>('')

  const fetchLyricSong = async () => {
    try {
      const result = await getLyricSong(lyricUrl)
      const cleanedText = result.data.replace(/\[[^\]]+\]/g, '')
      setLyric(cleanedText)
    } catch (error) {}
  }

  const getData = useCallback(() => {
    Promise.all([fetchLyricSong()])
  }, [lyricUrl])

  useEffect(getData, [getData])

  return (
    <View style={styles.container}>
      <MusicItem
        artists_names={artistNames}
        title={title}
        thumbnail={thumnail}
        onPress={() => {}}
      />
      <ScrollView
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}>
        <AppText
          color={Colors.white}
          fontWeight="800"
          fontSize={20}
          lineHeight={28}>
          {lyric}
        </AppText>
      </ScrollView>
    </View>
  )
}

export default LyricSong

const { width } = Dimensions.get('screen')
const styles = StyleSheet.create({
  container: {
    width: width,
    paddingTop: 60,
    paddingHorizontal: 20,
    height: 530,
  },
})
