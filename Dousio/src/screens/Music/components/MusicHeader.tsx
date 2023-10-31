import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import Box from '@/components/Box'
import Icon from '@/assets/svg/Icon'
import Header from '@/components/Header'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'

interface IMusicHeader {
  onPressNotifiBtn?: () => void
  onPressCreateBtn?: () => void
}

const MusicHeader = (props: IMusicHeader) => {
  const { onPressNotifiBtn, onPressCreateBtn } = props
  return (
    <Header
      renderLeft={() => (
        <Box>
          <AppText fontWeight="700" fontSize={22} color={Colors.white}>
            Thư viện
          </AppText>
        </Box>
      )}
      renderRight={() => (
        <Box row>
          <TouchableOpacity
            style={[styles.headerBtn, { marginRight: 12 }]}
            onPress={onPressCreateBtn}
          >
            <Icon iconName="create-tab" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn} onPress={onPressNotifiBtn}>
            <Icon iconName="search-tab" color='white' />
          </TouchableOpacity>
        </Box>
      )}
    />
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
