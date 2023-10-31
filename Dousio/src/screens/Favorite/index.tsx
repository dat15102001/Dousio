import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Box from '@/components/Box'

const Favorite = () => {
  return (
    <Box flex={1} center>
      <Text>Favorite</Text>
    </Box>
  )
}

export default memo(Favorite)

const styles = StyleSheet.create({})