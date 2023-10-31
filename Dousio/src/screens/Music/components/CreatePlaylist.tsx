import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@/components/Box'
import AppImage from '@/components/AppImage'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'
import Icon from '@/assets/svg/Icon'

const CreatePlaylist = () => {
  return (
    <Box row align="center">
      <Box center style={styles.container}>
        <Icon iconName="create" />
      </Box>
      <Box marginLeft={12}>
        <AppText fontSize={15} fontWeight="600" color={Colors.white}>
          Tạo playlist
        </AppText>
      </Box>
    </Box>
  )
}

export default CreatePlaylist

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: Colors.gray262626,
  },
})
