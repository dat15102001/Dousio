import { StyleSheet } from 'react-native'
import React, { memo } from 'react'
import Box from '@/components/Box'
import AvatarUser from '@/components/AvatarUser'
import AppText from '@/components/AppText'
import { Colors } from '@/theme'
import Padding from '@/components/Padding'
import AppButton from '@/components/AppButton'
import Icon from '@/assets/svg/Icon'

interface IProfileProps {
  numberPosts: number
  numberFollowers: number
  numberCurrentlyFollowing: number
  onPressEdit?: () => void
  onPressShareProfile?: () => void
  onPressShowPersion?: () => void
}

const ProfileInfo = (props: IProfileProps) => {
  const {
    numberPosts,
    numberFollowers,
    numberCurrentlyFollowing,
    onPressEdit,
    onPressShareProfile,
    onPressShowPersion,
  } = props
  return (
    <Box>
      <Box row>
        <AvatarUser
          size={80}
          avatarUrl="https://scontent-ord5-2.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ord5-2.cdninstagram.com&_nc_cat=1&_nc_ohc=sOTeXQzgIYAAX-4EwQu&edm=AAAAAAABAAAA&ccb=7-5&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2-ccb7-5&oh=00_AfBxlHbfOA7b5KzWUeEG2uBNLAqcGIWpDxjhrVwfbkCaFg&oe=64E0CE4F"
        />
        <Box flex={1} row center align="center">
          <Box center>
            <AppText color={Colors.white} fontSize={13} fontWeight="600">
              {numberPosts}
            </AppText>
            <Padding top={3} />
            <AppText color={Colors.white} fontSize={12} fontWeight="500">
              Bài viết
            </AppText>
          </Box>
          <Box center paddingHorizontal={12}>
            <AppText color={Colors.white} fontSize={13} fontWeight="600">
              {numberFollowers}
            </AppText>
            <Padding top={3} />
            <AppText color={Colors.white} fontSize={12} fontWeight="500">
              Người theo dõi
            </AppText>
          </Box>
          <Box center>
            <AppText color={Colors.white} fontSize={13} fontWeight="600">
              {numberCurrentlyFollowing}
            </AppText>
            <Padding top={3} />
            <AppText color={Colors.white} fontSize={12} fontWeight="500">
              Đang theo dõi
            </AppText>
          </Box>
        </Box>
      </Box>
      <Box>
        <Padding top={6} />
        <AppText color={Colors.white} fontWeight="600" fontSize={13}>
          Nguyen Van Dat
        </AppText>
        <Padding top={2} />
        <AppText color={Colors.white} fontSize={13}>
          None tieu su
        </AppText>
      </Box>
      <Box row paddingTop={20} paddingHorizontal={12} justify="space-around">
        <AppButton
          style={{ height: 30, width: '40%' }}
          backgroundColor={Colors.gray262626}
          textSize={12}
          text="Chỉnh sửa"
        />
        <AppButton
          style={{ height: 30, width: '45%' }}
          backgroundColor={Colors.gray262626}
          textSize={12}
          text="Chia sẻ trang cá nhân"
        />
        <AppButton
          style={{
            height: 30,
            width: 35,
            paddingLeft: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          backgroundColor={Colors.gray262626}
          textSize={12}
          svgIcon={<Icon iconName="explore" size={18} />}
          onPress={onPressShowPersion}
        />
      </Box>
    </Box>
  )
}

export default memo(ProfileInfo)

const styles = StyleSheet.create({
  headerBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
