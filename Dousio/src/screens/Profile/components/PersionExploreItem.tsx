import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import Box from '@/components/Box'
import Avatar from '@/components/Avatar'
import { Colors } from '@/theme'
import AppButton from '@/components/AppButton'
import Padding from '@/components/Padding'
import AppText from '@/components/AppText'
import Icon from '@/assets/svg/Icon'

export interface IPersionExploreItemProps {
  imageUrl: string
  name: string
  textFollow: string
  follow: number
}
const PersionExploreItem = (props: IPersionExploreItemProps) => {
  const { imageUrl, name, textFollow, follow } = props
  return (
    <Box
      width={150}
      height={210}
      align="center"
      paddingVertical={12}
      borderWidth={1}
      borderColor={Colors.gray363636}
      radius={4}
      backgroundColor={Colors.gray121212}
      paddingHorizontal={5}
    >
      <Box style={{ position: 'absolute', top: 6, right: 6 }}>
        <Icon size={15} iconName="delete" color={Colors.graya7a7a7} />
      </Box>
      <Avatar
        width={85}
        height={85}
        avatarUrl="https://instagram.fhan14-3.fna.fbcdn.net/v/t51.2885-19/358565770_673017558188842_2607598404546777923_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan14-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=VBYheN6Npi8AX9Srqba&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBz5t1W4CglkiSJjVulBbqqL8GxnxJrZiwqbsayCkGn5A&oe=64E2C932"
      />
      <Padding top={4} />
      <AppText
        fontWeight="600"
        fontSize={13}
        color={Colors.white}
        numberOfLines={1}
      >
        Naksu❤️
      </AppText>
      <AppText
        fontWeight="400"
        fontSize={11}
        color={Colors.graya8a8a8}
        style={{ textAlign: 'center' }}
        numberOfLines={2}
      >
        Có datnguyen theo dõi
      </AppText>
      <Padding top={8} />
      <AppButton
        style={{ width: 120, height: 30, position: 'absolute', bottom: 12 }}
        textSize={13}
        textWeight="700"
        text="Theo dõi"
      />
    </Box>
  )
}

export default memo(PersionExploreItem)

const styles = StyleSheet.create({})
