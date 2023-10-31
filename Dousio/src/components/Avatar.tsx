import { StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Colors } from '@/theme'
import AppImage from './AppImage'

interface IAvatarProps {
  avatarUrl: string
  width?: number
  height?: number
  linear?: boolean
}
const Avatar = (props: IAvatarProps) => {
  const { avatarUrl, width, height, linear } = props
  return (
    <>
      {linear ? (
        <LinearGradient
          colors={[Colors.yellowffc901, Colors.pinkd300c5]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          style={[
            styles.container,
            {
              width: width + 4,
              height: height + 4,
              borderRadius: (width + 4) / 2,
            },
          ]}
        >
          <AppImage
            source={{
              uri: avatarUrl,
            }}
            resizeMode="cover"
            style={[
              styles.avatar,
              {
                width: width,
                height: height,
                borderRadius: width / 2,
              },
            ]}
          />
        </LinearGradient>
      ) : (
        <AppImage
          source={{
            uri: avatarUrl,
          }}
          resizeMode="cover"
          style={[
            {
              width: width,
              height: height,
              borderRadius: width / 2,
            },
          ]}
        />
      )}
    </>
  )
}

export default Avatar

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderWidth: 2,
    borderColor: Colors.black,
  },
})
