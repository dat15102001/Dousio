import { StyleSheet } from 'react-native'
import React, { memo } from 'react'
import Box from '@/components/Box'
import { ScrollView } from 'react-native-gesture-handler'
import AppImage from '@/components/AppImage'
import { Colors } from '@/theme'
import AppText from '@/components/AppText'
import ICCreate from '@/assets/svg/ICCreate'
import AvatarAnimated from '@/components/AvatarAnimated'
import AvatarUser from '@/components/AvatarUser'
import Avatar from '@/components/Avatar'

const StoryMenu = () => {
  return (
    <ScrollView style={styles.container} horizontal>
      <Box center padding={10} marginLeft={5}>
        <AvatarUser
          size={56}
          avatarUrl="https://static2.yan.vn/YanNews/2167221/201904/nhung-nu-than-the-he-moi-10x-tren-instagram-sao-ma-xinh-vay-chu-ec16a1d3.jpg"
        />
        <AppText
          color={Colors.white}
          fontWeight="500"
          fontSize={12}
          style={{ marginTop: 8 }}
        >
          Tin của bạn
        </AppText>
      </Box>
      <Box center padding={10}>
        <Avatar
          width={58}
          height={58}
          avatarUrl="https://static2.yan.vn/YanNews/2167221/201904/nhung-nu-than-the-he-moi-10x-tren-instagram-sao-ma-xinh-vay-chu-ec16a1d3.jpg"
        />
        <AppText
          color={Colors.white}
          fontWeight="500"
          fontSize={12}
          style={{ width: 64, textAlign: 'center', marginTop: 2 }}
        >
          withlyy
        </AppText>
      </Box>
      <Box center padding={10}>
        <Avatar
          width={58}
          height={58}
          avatarUrl="https://static2.yan.vn/YanNews/2167221/201904/nhung-nu-than-the-he-moi-10x-tren-instagram-sao-ma-xinh-vay-chu-ec16a1d3.jpg"
        />
        <AppText
          numberOfLines={1}
          color={Colors.white}
          fontWeight="500"
          fontSize={12}
          style={{ width: 64, textAlign: 'center', marginTop: 2 }}
        >
          gthuonggg
        </AppText>
      </Box>
      <Box center padding={10}>
        <Avatar
          width={58}
          height={58}
          avatarUrl="https://static2.yan.vn/YanNews/2167221/201904/nhung-nu-than-the-he-moi-10x-tren-instagram-sao-ma-xinh-vay-chu-ec16a1d3.jpg"
        />
        <AppText
          numberOfLines={1}
          color={Colors.white}
          fontWeight="500"
          fontSize={12}
          style={{ width: 64, textAlign: 'center', marginTop: 2 }}
        >
          thuonghuyenn_
        </AppText>
      </Box>
      <Box center padding={10}>
        <Avatar
          width={58}
          height={58}
          avatarUrl="https://static2.yan.vn/YanNews/2167221/201904/nhung-nu-than-the-he-moi-10x-tren-instagram-sao-ma-xinh-vay-chu-ec16a1d3.jpg"
        />
        <AppText
          numberOfLines={1}
          color={Colors.white}
          fontWeight="500"
          fontSize={12}
          style={{ width: 64, textAlign: 'center', marginTop: 2 }}
        >
          _ranie.23_
        </AppText>
      </Box>
    </ScrollView>
  )
}

export default memo(StoryMenu)

const styles = StyleSheet.create({
  container: {
    maxHeight: 120,
    backgroundColor: Colors.gray121212,
    borderBottomColor: Colors.gray363636,
    borderBottomWidth: 1,
  },
  avatarUser: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: 'hidden',
  },
  circle: {
    borderRadius: 31,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
  },
})
