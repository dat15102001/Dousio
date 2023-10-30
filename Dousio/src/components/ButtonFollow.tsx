import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Box from './Box'
import AppText from './AppText'
import { Colors } from '@/theme'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface IFollowBtnProps {
  idUser?: string
  follow?: number
}
const ButtonFollow = (props: IFollowBtnProps) => {
  const { idUser, follow } = props
  const [isFollow, setIsFollow] = useState<boolean>(follow === 1 ? true : false)
  const onFollowPress = () => {
    if(isFollow) {
      setIsFollow(false)
    } else {
      setIsFollow(true)
    }
  }
  return (
    <TouchableOpacity onPress={onFollowPress}>
      <Box
        center
        paddingVertical={5}
        paddingHorizontal={8}
        radius={6}
        borderWidth={1}
        borderColor={Colors.grayBDB7B7}
      >
        <AppText fontSize={13} fontWeight="600" color={Colors.white}>
          {isFollow ? 'Đang theo dõi' : 'Theo dõi'}
        </AppText>
      </Box>
    </TouchableOpacity>
  )
}

export default ButtonFollow

const styles = StyleSheet.create({
  container: {},
})
