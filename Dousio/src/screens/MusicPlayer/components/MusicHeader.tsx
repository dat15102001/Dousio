import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { memo, useMemo, useState } from 'react'
import Box from '@/components/Box'
import Icon from '@/assets/svg/Icon'
import Header from '@/components/Header'
import { Colors } from '@/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import AppText from '@/components/AppText'
import Padding from '@/components/Padding'
import Panigator from '@/components/Panigator'
import { useSharedValue } from 'react-native-reanimated'

interface IMusicHeader {
  onPressBackBtn?: () => void
  onPressNotifiBtn?: () => void
  onPressCreateBtn?: () => void
}

const MusicHeader = (props: IMusicHeader) => {
  const { onPressBackBtn } = props
  const { top: statusBarHeight } = useSafeAreaInsets()
  const paddingTop = useMemo(
    () => ({ paddingTop: statusBarHeight }),
    [statusBarHeight],
  )

  return (
    <Box row style={[paddingTop]} justify="space-evenly">
      <Box row flex={1} center>
        <Box style={{ position: 'absolute', left: 16, top: 4 }}>
          <TouchableOpacity onPress={onPressBackBtn}>
            <Icon iconName="arrowdown" />
          </TouchableOpacity>
        </Box>
        <Box center>
          <AppText fontSize={16} fontWeight="500" color={Colors.grayBDB7B7}>
            PHÁT TỪ
          </AppText>
          <Padding top={4} />
          <AppText fontSize={15} fontWeight="400" color={Colors.white}>
            Flow nay muot
          </AppText>
          <Padding top={4} />
        </Box>
        <Box style={{ position: 'absolute', right: 16, top: 4 }}>
          <TouchableOpacity style={styles.headerBtn} onPress={() => {}}>
            <Icon size={35} iconName="three-dot-horizontal" />
          </TouchableOpacity>
        </Box>
      </Box>
    </Box>
  )
}

export default memo(MusicHeader)

const styles = StyleSheet.create({
  headerBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
