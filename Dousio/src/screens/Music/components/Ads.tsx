import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@/components/Box'
import { Colors } from '@/theme'
import AppImage from '@/components/AppImage'
import AppText from '@/components/AppText'
import Padding from '@/components/Padding'

const Ads = () => {
  return (
    <Box
      backgroundColor={Colors.gray262626}
      marginHorizontal={12}
      padding={10}
      radius={8}
      marginTop={10}
      row
    >
      <AppImage
        style={styles.imageAds}
        resizeMode="contain"
        source={{
          uri: 'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/b/f/0/1/bf0182328238f2a252496a63e51f1f74.jpg',
        }}
      />
      <Box flex={1} marginLeft={10} justify='center'>
        <AppText fontSize={10} color='red' fontWeight='600'>NGHE NHẠC KHÔNG QUẢNG CÁO</AppText>
        <Padding top={3} />
        <AppText fontSize={13} color={Colors.white}>Gói Zing MP3 Plus chỉ 19,000 / tháng</AppText>
        <Padding top={3} />
        <AppText fontSize={13} color={Colors.graya8a8a8}>Nâng cấp ngay</AppText>
      </Box>
    </Box>
  )
}

export default Ads

const styles = StyleSheet.create({
  imageAds: {
    width: 60,
    height: 60,
  },
})
