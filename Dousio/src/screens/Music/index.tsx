import { RefreshControl, StyleSheet, ScrollView, ViewStyle } from 'react-native'
import React, { useMemo, useState } from 'react'
import Ads from './components/Ads'
import Box from '@/components/Box'
import { Colors, screenHeight } from '@/theme'
import MusicHeader from './components/MusicHeader'
import ListFeature from './components/ListFeature'
import HeardRecently from './components/HeardRecently'
import MusicTabView from './components/MusicTabView'
import AppBottomSheet from '@/components/AppBottomSheet'
import { SheetTypeMusic } from '@/constants'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'

const Music = () => {
  const [sheetType, setSheetType] = useState<string>('')
  const bottomTabHeight = useBottomTabBarHeight()
  
  const paddingBottom = useMemo<ViewStyle>(
    () => ({
      paddingBottom: bottomTabHeight,
    }),
    [bottomTabHeight],
  )

  return (
    <Box style={{ flex: 1, backgroundColor: Colors.black }}>
      <MusicHeader
        onPressCreateBtn={() => setSheetType(SheetTypeMusic.MUSIC)}
      />
      <ScrollView
        refreshControl={<RefreshControl refreshing={false} tintColor="#fff" />}
        scrollEventThrottle={16}
        contentContainerStyle={[paddingBottom]}
      >
        <Ads />
        <ListFeature />
        <HeardRecently />
        <MusicTabView />
      </ScrollView>
      {/* {sheetType === SheetTypeMusic.MUSIC && (
        <AppBottomSheet
          snapPoints={[screenHeight - 100]}
          index={0}
          onClose={() => setSheetType('')}
        >
          <Box flex={1} backgroundColor="red">
            <AppText>ok ok</AppText>
          </Box>
        </AppBottomSheet>
      )} */}
    </Box>
  )
}

export default Music

const styles = StyleSheet.create({})
