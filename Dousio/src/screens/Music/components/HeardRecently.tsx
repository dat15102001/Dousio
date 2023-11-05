import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@/components/Box'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'
import Icon from '@/assets/svg/Icon'
import Padding from '@/components/Padding'
import AppImage from '@/components/AppImage'
import { FlatList } from 'react-native-gesture-handler'

interface IHeardRecently {
  url?: string
  title?: string
}

const listHeardRecently: [IHeardRecently] = [
  {
    url: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/08/ve-luffy-1.jpg',
    title: 'Bài hát nghe gần đây',
  },
  {
    url: 'https://gamek.mediacdn.vn/133514250583805952/2022/3/23/kaicd1-1648008713032478606212.jpg',
    title: 'Music suy',
  },
  {
    url: 'https://cdn.oneesports.vn/cdn-data/sites/4/2023/09/One-Piece-Gear-5-thumb.jpg',
    title: 'Go',
  },
  {
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkxB-MCnnqt3EDxnsdzMfxg027eCzcju8NaZOP_ufHqEzz2uoctjflmvTOdjAyiTI0oaE&usqp=CAU',
    title: 'Lofi',
  },
  {
    url: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/07/anh-luffy.jpg',
    title: 'Flex chill',
  },
]

const HeardRecently = () => {
  const renderItem = ({ item, index }) => {
    return (
      <Box paddingTop={12} width={150} marginLeft={index > 0 ? 16 : 0} key={index}>
        <AppImage
          style={styles.image}
          source={{
            uri: item.url,
          }}
          resizeMode="cover"
        />
        <Padding top={8} />
        <AppText
          numberOfLines={2}
          fontSize={14}
          fontWeight="500"
          color={Colors.white}
        >
          {item.title}
        </AppText>
      </Box>
    )
  }

  return (
    <Box paddingHorizontal={12} marginTop={12}>
      <Box row>
        <AppText fontSize={18} fontWeight="600" color={Colors.white}>
          Nghe gần đây
        </AppText>
        <Padding left={4} />
        <Box style={{ transform: [{ rotate: '270deg' }] }}>
          <Icon size={15} iconName="arrowdown" />
        </Box>
      </Box>
      <FlatList
        data={listHeardRecently}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </Box>
  )
}

export default HeardRecently

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
})
