import { StyleSheet, View } from 'react-native'
import React, { memo, useMemo } from 'react'
import ICCreate from '@/assets/svg/ICCreate'
import AppImage from './AppImage'
import { Colors } from '@/theme'

interface IAvatarProps {
  size: number
  avatarUrl: string
}

const AvatarUser = (props: IAvatarProps) => {
  const { size, avatarUrl } = props
  const sizeView = useMemo(
    () => ({
      width: size,
      height: size,
      borderRadius: size / 2,
    }),
    [size],
  )
  return (
    <View style={[styles.container, sizeView]}>
      <AppImage
        source={{
          uri: avatarUrl,
        }}
        resizeMode="cover"
        style={[sizeView]}
      />
      <View style={styles.addButton}>
        <ICCreate color={Colors.blue0095f6} size={18} />
      </View>
    </View>
  )
}

export default memo(AvatarUser)

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: Colors.white,
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 3,
    borderColor: Colors.black,
    position: 'absolute',
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
