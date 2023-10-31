import {
  FlatList,
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import Box from '@/components/Box'
import HeaderProfile from './components/HeaderProfile'
import ProfileInfo from './components/ProfileInfo'
import { Colors, screenWidth } from '@/theme'
import Padding from '@/components/Padding'
import AppText from '@/components/AppText'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'
import PersionExploreItem, {
  IPersionExploreItemProps,
} from './components/PersionExploreItem'
import Album from './components/Album'
import Icon from '@/assets/svg/Icon'
import _ from 'lodash'
import { TouchableOpacity } from 'react-native-gesture-handler'

const listPersion: [IPersionExploreItemProps] = [
  {
    imageUrl:
      'https://instagram.fhan14-3.fna.fbcdn.net/v/t51.2885-19/358565770_673017558188842_2607598404546777923_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan14-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=VBYheN6Npi8AX9Srqba&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBz5t1W4CglkiSJjVulBbqqL8GxnxJrZiwqbsayCkGn5A&oe=64E2C932',
    name: ' Naksu❤️',
    textFollow: ' Có datnguyen theo dõi',
    follow: 0,
  },
  {
    imageUrl:
      'https://instagram.fhan14-3.fna.fbcdn.net/v/t51.2885-19/358565770_673017558188842_2607598404546777923_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan14-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=VBYheN6Npi8AX9Srqba&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBz5t1W4CglkiSJjVulBbqqL8GxnxJrZiwqbsayCkGn5A&oe=64E2C932',
    name: ' Naksu❤️',
    textFollow: ' Có datnguyen theo dõi',
    follow: 0,
  },
  {
    imageUrl:
      'https://instagram.fhan14-3.fna.fbcdn.net/v/t51.2885-19/358565770_673017558188842_2607598404546777923_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan14-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=VBYheN6Npi8AX9Srqba&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBz5t1W4CglkiSJjVulBbqqL8GxnxJrZiwqbsayCkGn5A&oe=64E2C932',
    name: ' Naksu❤️',
    textFollow: ' Có datnguyen theo dõi',
    follow: 0,
  },
  {
    imageUrl:
      'https://instagram.fhan14-3.fna.fbcdn.net/v/t51.2885-19/358565770_673017558188842_2607598404546777923_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan14-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=VBYheN6Npi8AX9Srqba&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBz5t1W4CglkiSJjVulBbqqL8GxnxJrZiwqbsayCkGn5A&oe=64E2C932',
    name: ' Naksu❤️',
    textFollow: ' Có datnguyen theo dõi',
    follow: 0,
  },
  {
    imageUrl:
      'https://instagram.fhan14-3.fna.fbcdn.net/v/t51.2885-19/358565770_673017558188842_2607598404546777923_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fhan14-3.fna.fbcdn.net&_nc_cat=110&_nc_ohc=VBYheN6Npi8AX9Srqba&edm=AAAAAAABAAAA&ccb=7-5&oh=00_AfBz5t1W4CglkiSJjVulBbqqL8GxnxJrZiwqbsayCkGn5A&oe=64E2C932',
    name: ' Naksu❤️',
    textFollow: ' Có datnguyen theo dõi',
    follow: 0,
  },
]

const Profile = () => {
  const [isShowPersion, setShowPersion] = useState<boolean>(true)
  const heightViewPersion = useSharedValue<number>(240)
  const scrollTabX = useSharedValue<number>(0)
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const renderItem = ({ item, index }) => {
    return (
      <Box marginLeft={12}>
        <PersionExploreItem
          imageUrl={item.imageUrl}
          name={item.name}
          textFollow={item.textFollow}
          follow={item.follow}
        />
      </Box>
    )
  }

  const onPressShowPersion = () => {
    setShowPersion(!isShowPersion)
    heightViewPersion.value = withTiming(isShowPersion ? 240 : 0, {
      duration: 150,
    })
  }

  const stylePersionAnimted = useAnimatedStyle(() => ({
    height: heightViewPersion.value,
  }))

  const tabs = [
    { key: 1, icon: <Icon iconName="grid" /> },
    { key: 2, icon: <Icon iconName="user-tagged" /> },
  ]

  const widthTab = screenWidth / tabs.length
  const { width } = useWindowDimensions()

  const renderTabView = () => {
    // const inputRange = [(currentIndex - 1) * width, currentIndex * width]

    const styleAnimated = useAnimatedStyle(() => {
      // const translateX = withSpring(
      //   currentIndex === 0 ? 0 : currentIndex * widthTab,
      //   // {},
      // )

      return { transform: [{ translateX: scrollTabX.value / 2 }] }
    }, [currentIndex])

    return (
      <Box paddingBottom={20}>
        <Box row justify="space-between" paddingBottom={5}>
          {_.map(tabs, (item, index) => {
            return (
              <TouchableOpacity key={index}>
                <Box width={widthTab} center>
                  {item.icon}
                </Box>
              </TouchableOpacity>
            )
          })}
        </Box>

        <Animated.View
          style={[
            { width: widthTab, backgroundColor: 'white', height: 1 },
            styleAnimated,
          ]}
        />
      </Box>
    )
  }

  const calculateCurrentIndex = (offsetX: number) => {
    const index = Math.round(offsetX / screenWidth)
    setCurrentIndex(index)
  }

  return (
    <Box flex={1} backgroundColor="#000">
      <HeaderProfile />
      <ScrollView
        style={{ paddingTop: 20 }}
        contentContainerStyle={{ paddingBottom: 120 }}
        refreshControl={<RefreshControl refreshing={false} tintColor="#fff" />}
        scrollEventThrottle={16}
      >
        <ProfileInfo
          numberPosts={2}
          numberFollowers={10}
          numberCurrentlyFollowing={31}
          onPressShowPersion={onPressShowPersion}
        />
        <Padding top={20} />
        <Animated.View style={stylePersionAnimted}>
          <Box
            row
            justify="space-between"
            paddingHorizontal={12}
            paddingBottom={12}
          >
            <AppText color={Colors.white} fontSize={13} fontWeight="600">
              Khám phá mọi người
            </AppText>
            <AppText color={Colors.blue0095f6} fontSize={14} fontWeight="600">
              Xem tất cả
            </AppText>
          </Box>
          <FlatList horizontal data={listPersion} renderItem={renderItem} />
        </Animated.View>
        <Padding top={20} />
        {renderTabView()}
        <Animated.ScrollView
          horizontal
          snapToAlignment="center"
          pagingEnabled
          onScroll={event => {
            scrollTabX.value = event.nativeEvent.contentOffset.x
            // console.log('scrollX = ', scrollTabX.value, screenWidth)
            // calculateCurrentIndex(event.nativeEvent.contentOffset.x)
          }}
          keyExtractor={(_, index) => index.toString()}
          scrollEventThrottle={16}
        >
          <Album />
          <Album />
        </Animated.ScrollView>
      </ScrollView>
    </Box>
  )
}

export default memo(Profile)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    height: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    top: 0,
  },
  scrollView: {
    flex: 1,
  },
})
