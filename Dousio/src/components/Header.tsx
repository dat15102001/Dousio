import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React, { memo } from 'react'
import Box from '@/components/Box'
import { Colors } from '@/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { isFunction } from 'lodash'
import Icon from '@/assets/svg/Icon'
import { useNavigation } from '@react-navigation/native'

interface IHeaderProps {
  containerStyle?: ViewStyle[] | ViewStyle
  renderLeft?: () => React.ReactNode
  renderRight?: () => React.ReactNode
  showBack?: boolean
  borderBottomColor?: string
}

const Header = (props: IHeaderProps) => {
  const { containerStyle, renderLeft, renderRight, showBack, borderBottomColor } = props
  const { top: statusBarHeight } = useSafeAreaInsets()
  const navigation = useNavigation()

  const onPressBack = () => {
    navigation.goBack()
  }

  return (
    <Box
      backgroundColor={Colors.black}
      row
      justify="space-between"
      align="center"
      paddingTop={statusBarHeight}
      paddingHorizontal={10}
      paddingBottom={10}
      borderBottomWidth={1}
      borderBottomColor={borderBottomColor}
      style={[StyleSheet.flatten(containerStyle)]}
    >
      <Box row>
        {showBack && (
          <TouchableOpacity onPress={onPressBack}>
            <Icon iconName="back2" />
          </TouchableOpacity>
        )}
        {isFunction(renderLeft) ? renderLeft() : null}
      </Box>
      {isFunction(renderRight) ? renderRight() : null}
    </Box>
  )
}

export default memo(Header)

const styles = StyleSheet.create({
  headerBtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
