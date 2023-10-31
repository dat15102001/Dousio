import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Ads from './components/Ads'
import Box from '@/components/Box'
import { Colors, screenHeight, screenWidth } from '@/theme'
import MusicHeader from './components/MusicHeader'
import ListFeature from './components/ListFeature'
import HeardRecently from './components/HeardRecently'
import MusicTabView from './components/MusicTabView'
import AppBottomSheet from '@/components/AppBottomSheet'
import AppText from '@/components/AppText'
import { SheetTypeMusic } from '@/constants'

const Music = () => {
  const [sheetType, setSheetType] = useState('')

  useEffect(() => {
    console.log(sheetType)
  }, [sheetType])

  return (
    <Box style={{ flex: 1, backgroundColor: Colors.black }}>
      <MusicHeader
        onPressCreateBtn={() => setSheetType(SheetTypeMusic.MUSIC)}
      />
      <ScrollView
        refreshControl={<RefreshControl refreshing={false} tintColor="#fff" />}
        scrollEventThrottle={16}
      >
        <Ads />
        <ListFeature />
        <HeardRecently />
        <MusicTabView />
      </ScrollView>
      {sheetType === SheetTypeMusic.MUSIC && (
        <AppBottomSheet
          snapPoints={[screenHeight - 100]}
          index={0}
          onClose={() => setSheetType('')}
        >
          <Box flex={1} backgroundColor="red">
            <AppText>ok ok</AppText>
          </Box>
        </AppBottomSheet>
      )}
    </Box>
  )
}

export default Music

const styles = StyleSheet.create({})
