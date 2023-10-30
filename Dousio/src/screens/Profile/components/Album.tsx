import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { screenWidth } from '@/theme'
import AppImage from '@/components/AppImage'
import Box from '@/components/Box'

const data = [
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
  {
    url: 'https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/395145578_1502406227228300_1548773942709648399_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=D9NCLULLCw0AX8K7Dz8&_nc_ht=scontent.fhan15-1.fna&_nc_e2o=s&oh=00_AfCdi8XJGvfaktfryJS0SB1HrrI54-XFsiLWfJZ_Jkfh7g&oe=653F5E3B',
  },
]

const numColumns = 3
const itemWidth = (screenWidth - 8) / numColumns

const Album = () => {
  const renderItem = item => {
    return (
      <Box marginLeft={2} marginTop={2}>
        <AppImage
          source={{
            uri: item.url,
          }}
          style={{ width: itemWidth, height: itemWidth }}
          resizeMode="contain"
        />
      </Box>
    )
  }
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View key={index}>
          {renderItem(item)}
        </View>
      ))}
    </View>
  )
}

export default Album

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screenWidth,
  },
})
