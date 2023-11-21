import { StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import Box from './Box'
import AppText from './AppText'
import { Colors, screenWidth } from '@/theme'
import Icon from '@/assets/svg/Icon'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Padding from './Padding'
import ButtonFollow from './ButtonFollow'
import AppTextMore from './AppTextMore'
import _ from 'lodash'
import Panigator from './Panigator'
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from 'react-native-reanimated'
import VideoItem from './VideoItem'
import { BlurView } from '@react-native-community/blur'
import BottomSheet from '@gorhom/bottom-sheet'
import Video from 'react-native-video'
import AppImage2 from './AppImage2'
import Avatar from './Avatar'

const imageData = [
  {
    id: 1,
    url: 'https://ep.edu.vn/cac-hot-girl-han-quoc/imager_15529.jpg',
    type: 'image',
  },
  {
    id: 2,
    url: 'https://cdn.flowplayer.com/a30bd6bc-f98b-47bc-abf5-97633d4faea0/hls/de3f6ca7-2db3-4689-8160-0f574a5996ad/playlist.m3u8',
    type: 'video',
  },
  {
    id: 3,
    url: 'https://gaixinhbikini.com/wp-content/uploads/2022/08/6f6876e133f99bec0a509babd33ec398.jpg',
    type: 'image',
  },
  {
    id: 4,
    url: 'https://gaixinhbikini.com/wp-content/uploads/2022/08/6f6876e133f99bec0a509babd33ec398.jpg',
    type: 'image',
  },
  {
    id: 5,
    url: 'https://gaixinhbikini.com/wp-content/uploads/2022/08/6f6876e133f99bec0a509babd33ec398.jpg',
    type: 'image',
  },
]

const PostItem = () => {
  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
  const scrollX = useSharedValue<number>(0)
  const heightSaveNotifiView = useSharedValue<number>(0)
  const [isSave, setSave] = useState<boolean>(false)
  const shareRef = useRef<BottomSheet>(null)

  const renderImageItem = ({ item, index }) => {
    return (
      <>
        {item.type === 'image' ? (
          <AppImage2
            style={{ width: screenWidth, height: 590 }}
            resizeMode="contain"
            source={{
              uri: item.url,
            }}
            enablePinchZoom
            // lightboxs
          />
        ) : (
          <VideoItem url={item.url} currentIndex={currentIndex} index={index} />
        )}
      </>
    )
  }

  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const viewableItemsChanged = useRef(({ viewableItems }) => {
    setCurrentIndex(viewableItems[0].index)
  }).current

  const onScroll = useAnimatedScrollHandler(event => {
    scrollX.value = event.contentOffset.x
  })

  const styleSaveNotifiViewAnimated = useAnimatedStyle(() => ({
    height: heightSaveNotifiView.value,
  }))

  const onSave = () => {
    setSave(!isSave)
    if (!isSave) {
      const heightSave = withSequence(
        withTiming(40, { duration: 200 }),
        withDelay(1500, withTiming(0, { duration: 100 })),
      )
      heightSaveNotifiView.value = heightSave
    }
  }

  const onShare = () => {
    // shareRef.current.collapse()
  }

  return (
    <Box flex={1}>
      <Box row justify="space-between" center paddingVertical={10}>
        <Box row center>
          <Avatar
            width={40}
            height={40}
            avatarUrl="data:image/jpeg;base64,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"
          />
          <Box style={styles.username}>
            <Box row center>
              <AppText fontWeight="600" fontSize={14} color={Colors.white}>
                Iaminee
              </AppText>
            </Box>
            <AppText
              fontWeight="500"
              fontSize={12}
              color={Colors.white}
              style={styles.sound}
            >
              Don Omar
            </AppText>
          </Box>
        </Box>
        <Box row>
          <ButtonFollow />
          <Padding right={10} />
          <TouchableOpacity style={styles.threeDot}>
            <Icon iconName="three-dot-horizontal" />
          </TouchableOpacity>
        </Box>
      </Box>
      <Box>
        <Animated.FlatList
          data={imageData}
          renderItem={renderImageItem}
          keyExtractor={item => item.id}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={viewableItemsChanged}
          onScroll={onScroll}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
        />
        <Animated.View
          style={[styles.saveNotificationView, styleSaveNotifiViewAnimated]}
        >
          <BlurView
            blurType="dark"
            blurAmount={5}
            style={[styles.saveNotificationView, { top: 0 }]}
          >
            <AppText
              fontSize={13}
              fontWeight="600"
              color={Colors.blue0095f6}
              style={{ marginLeft: 12 }}
            >
              Lưu vào bộ sưu tập
            </AppText>
          </BlurView>
        </Animated.View>
      </Box>
      <Box paddingTop={6} paddingLeft={6}>
        <Box row justify="space-between">
          <Box row>
            <TouchableOpacity style={styles.icon}>
              <Icon iconName="favorite-tab" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
              <Icon iconName="comment" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onShare} style={styles.icon}>
              <Icon iconName="share" />
            </TouchableOpacity>
          </Box>
          <Box
            row
            width={screenWidth}
            height={24}
            center
            style={{ position: 'absolute' }}
          >
            <Panigator
              item={imageData}
              scrollX={scrollX}
              currentIndex={currentIndex}
            />
          </Box>
          <TouchableOpacity onPress={onSave} style={styles.iconSave}>
            <Icon iconName={isSave ? 'save-fill' : 'save'} color="white" />
          </TouchableOpacity>
        </Box>
        <Box paddingLeft={8} paddingTop={8}>
          <AppText fontWeight="600" fontSize={13} color={Colors.white}>
            1.220.319 lượt thích
          </AppText>
          <AppTextMore
            maxLength={100}
            initialText="Hii please tell me some tips support me Hii please tell me some tips
            support meHii please tell me some tips support me Hii please tell me
            some tips support me Hii please tell me some tips support me  
            me Hii please tell me some tips support me  
            me Hii please tell me some tips support me
            me Hii please tell me some tips support me  "
          />
          <AppText fontWeight="500" color={Colors.grayBDB7B7}>
            Xem tất cả 5 bình luận
          </AppText>
          <AppText fontWeight="400" fontSize={13} color={Colors.grayBDB7B7}>
            4 giờ trước
          </AppText>
        </Box>
      </Box>
      {/* <Portal>
        <BottomSheet
          ref={shareRef}
          snapPoints={['50%']}
          enablePanDownToClose
          backdropComponent={props => (
            <BottomSheetBackdrop
              {...props}
              appearsOnIndex={0}
              disappearsOnIndex={-1}
            />
          )}
        >
        </BottomSheet>
      </Portal> */}
    </Box>
  )
}

export default PostItem

const styles = StyleSheet.create({
  username: {
    marginLeft: 10,
  },
  threeDot: {
    marginRight: 20,
  },
  sound: {
    marginTop: 5,
  },
  icon: {
    paddingHorizontal: 6,
  },
  iconSave: {
    paddingRight: 12,
  },
  descTxt: {
    marginTop: 5,
  },
  dot: {
    height: 6,
    borderRadius: 5,
    backgroundColor: Colors.primary,
    marginHorizontal: 4,
  },
  saveNotificationView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    justifyContent: 'center',
  },
})
