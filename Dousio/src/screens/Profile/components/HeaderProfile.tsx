import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import Header from '@/components/Header'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'
import Box from '@/components/Box'
import Icon from '@/assets/svg/Icon'
import Padding from '@/components/Padding'

const HeaderProfile = () => {
  return (
    <Header
      renderLeft={() => (
        <TouchableOpacity>
          <Box row align="center">
            <AppText color={Colors.white} fontSize={20} fontWeight="700">
              datnguyen.2908
            </AppText>
            <Padding left={4} />
            <Icon iconName="arrowdown" size={18} />
          </Box>
        </TouchableOpacity>
      )}
      renderRight={() => (
        <Box row>
          <TouchableOpacity style={[styles.headerBtn, {marginRight: 10}]}>
            <Icon iconName="create-tab" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <Icon iconName="grid" />
          </TouchableOpacity>
        </Box>
      )}
    />
  )
}

export default memo(HeaderProfile)

const styles = StyleSheet.create({
  headerBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
