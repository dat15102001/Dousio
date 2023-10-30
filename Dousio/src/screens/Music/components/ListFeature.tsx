import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Box from '@/components/Box'
import { FlatList } from 'react-native-gesture-handler'
import { IconName } from '@/assets/svg/type'
import FeatureItem from './FeatureItem'

export interface IFeature {
  iconName?: IconName
  title?: string
  content: string
}
const listFeatures: [IFeature] = [
  { iconName: 'favorite-tab', title: 'Bài hát yêu thích', content: '72' },
  { iconName: 'favorite-tab', title: 'Đã tải', content: '5' },
  { iconName: 'favorite-tab', title: 'Nghệ sỹ' },
  { iconName: 'favorite-tab', title: 'Upload' },
  { iconName: 'favorite-tab', title: 'MV' },
]

const ListFeature = () => {
  const renderItemFeature = ({ item, index }) => {
    return <FeatureItem item={item} index={index} key={index}/>
  }

  return (
    <FlatList
      data={listFeatures}
      renderItem={renderItemFeature}
      horizontal
      style={{ marginHorizontal: 12, maxHeight: 130 }}
    />
  )
}

export default ListFeature

const styles = StyleSheet.create({})
