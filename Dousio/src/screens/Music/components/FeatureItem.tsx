import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IFeature } from './ListFeature'
import AppText from '@/components/AppText'
import Box from '@/components/Box'
import Icon from '@/assets/svg/Icon'
import { Colors } from '@/theme'
import Padding from '@/components/Padding'

interface IFeatureItem {
  item: IFeature
  index: number
}

const FeatureItem = (props: IFeatureItem) => {
  const { iconName, title, content } = props.item

  return (
    <Box
      width={160}
      height={110}
      backgroundColor={Colors.gray262626}
      marginTop={12}
      padding={10}
      justify="center"
      radius={8}
      marginLeft={props.index > 0 ? 12 : 0}
    >
      <Icon size={25} iconName={iconName} />
      <Padding top={12} />
      <AppText fontSize={13} fontWeight="500" color={Colors.white}>
        {title}
      </AppText>
      <Padding top={4} />
      <AppText fontSize={12} color={Colors.grayBDB7B7}>
        {content}
      </AppText>
    </Box>
  )
}

export default FeatureItem

const styles = StyleSheet.create({})
