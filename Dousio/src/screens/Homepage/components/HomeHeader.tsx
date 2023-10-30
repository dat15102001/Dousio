import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { memo } from 'react'
import Box from '@/components/Box'
import Icon from '@/assets/svg/Icon'
import Header from '@/components/Header'
import { Colors } from '@/theme'

interface IHomeHeader {
  onPressLogoBtn?: () => void
  onPressNotifiBtn?: () => void
  onPressCreateBtn?: () => void
}

const HomeHeader = (props: IHomeHeader) => {
  const { onPressLogoBtn, onPressNotifiBtn, onPressCreateBtn } = props
  return (
    <Header
      renderLeft={() => (
        <Box row>
          <TouchableOpacity onPress={onPressLogoBtn} style={{marginLeft: 5}}>
            <Icon iconName="logo" />
          </TouchableOpacity>
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
            <Icon iconName="favorite-tab" />
          </TouchableOpacity>
        </Box>
      )}
      borderBottomColor={Colors.gray363636}
    />
  )
}

export default memo(HomeHeader)

const styles = StyleSheet.create({
  headerBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
