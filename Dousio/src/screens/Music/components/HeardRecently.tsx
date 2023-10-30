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
    url: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/375971647_276469335335922_6058325743436830773_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w76kV0gcjf0AX87OFYR&_nc_ht=scontent.fhan15-2.fna&oh=00_AfAE61n6QKVEJiJJakMMJ-Si_m0sK3b8d_21CeqLMDFp1w&oe=654100ED',
    title: 'Bài hát nghe gần đây',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/375982487_276469435335912_1223575597112949437_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=dbSjwubm1vYAX8qtHBx&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAPpTKHbEEyUtLIMZ6bG2chDSqLTd6ayvvtlp68eMBFAg&oe=653FE9AA',
    title: 'Music suy',
  },
  {
    url: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/395075279_636508835322924_3238948474200770113_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ihf5vEYdO6UAX-Giqyc&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDf8kJrdjADCRKQ10OKezZpyMMHmnS_YYT251ZO1N-lxQ&oe=65415E48',
    title: 'Go',
  },
  {
    url: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/383398690_848186260033124_4665249479019526291_n.jpg?stp=dst-jpg_p843x403&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gIs-vccxCHoAX867W8j&_nc_ht=scontent.fhan15-2.fna&oh=00_AfD0I7xbVgyJQGIHQFl5F1yuTOZ3REAYOLPCPlaSOPiMWA&oe=6541662A',
    title: 'Lofi',
  },
  {
    url: 'https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-6/395075279_636508835322924_3238948474200770113_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ihf5vEYdO6UAX-Giqyc&_nc_ht=scontent.fhan15-2.fna&oh=00_AfDf8kJrdjADCRKQ10OKezZpyMMHmnS_YYT251ZO1N-lxQ&oe=65415E48',
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
