import { StyleSheet, Text } from 'react-native'
import React, { memo } from 'react'
import Box from '@/components/Box'
import WebView from 'react-native-webview'
import Header from '@/components/Header'

const Favorite = () => {
  return (
    <Box flex={1} backgroundColor='#000'>
      <Header />
      <WebView source={{ uri: 'https://www.youtube.com/watch?v=lekfZs1jJH0' }} />
    </Box>
  )
}

export default memo(Favorite)

const styles = StyleSheet.create({})
