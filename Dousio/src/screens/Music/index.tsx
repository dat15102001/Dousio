import {
  ActivityIndicator,
  RefreshControl,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native'
import React from 'react'
import Ads from './components/Ads'
import Box from '@/components/Box'
import { Colors } from '@/theme'
import MusicHeader from './components/MusicHeader'
import ListFeature from './components/ListFeature'
import HeardRecently from './components/HeardRecently'
import MusicTabView from './components/MusicTabView'

const Music = () => {
  return (
    <Box style={{ flex: 1, backgroundColor: Colors.black }}>
      <MusicHeader />
      <ScrollView
        refreshControl={<RefreshControl refreshing={false} tintColor="#fff" />}
        scrollEventThrottle={16}
      >
        <Ads />
        <ListFeature />
        <HeardRecently />
        <MusicTabView />
      </ScrollView>
    </Box>
  )
}

export default Music

const styles = StyleSheet.create({})
