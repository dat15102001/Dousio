import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

export default function Header2() {
  return (
    <View
      style={{
        // marginTop:Constant.statusBarHeight,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,
        backgroundColor: 'black'
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          margin: 5,
        }}
      >
        <Text
          style={{
            fontSize: 22,
            marginLeft: 5,
            fontWeight: 'bold',
            color:'white'
          }}
        >
          YouTube
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 150,
          margin: 5,
        }}
      ></View>
    </View>
  )
}
