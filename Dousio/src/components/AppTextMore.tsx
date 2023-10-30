import { Colors } from '@/theme'
import React, { useCallback, useEffect, useState } from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

const fontSize = 14
const AppTextMore = ({ initialText, maxLength }) => {
  const lineCount = 6 // Số dòng văn bản
  const textHeightNumberLines = fontSize * 1.25 * 2
  const textHeightTotal = lineCount * fontSize * 1.25

  const [showFullText, setShowFullText] = useState<boolean>(false)

  const toggleText = () => {
    setShowFullText(!showFullText)
  }

  const [expanded, setExpanded] = useState(false)
  const animationHeight = useSharedValue(40)

  const toggleExpansion = () => {
    setExpanded(!expanded)
  }

  useEffect(() => {
    if (expanded) {
      animationHeight.value = withSpring(105, {
        duration: 1500,
      })
    } else {
      animationHeight.value = withTiming(40, {
        duration: 200,
      })
    }
  }, [expanded])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: animationHeight.value,
    }
  })

  return (
    <TouchableHighlight
      activeOpacity={1}
      onPress={() => {
        toggleText()
        toggleExpansion()
      }}
    >
      <Animated.View style={animatedStyle}>
        <Text style={[styles.text]}>
          {showFullText || initialText.length <= maxLength
            ? initialText
            : `${initialText.slice(0, maxLength)}... `}
          {showFullText ||
            (initialText.length > maxLength && (
              <Text style={styles.textMore}>Xem thêm</Text>
            ))}
        </Text>
      </Animated.View>
    </TouchableHighlight>
  )
}

export default AppTextMore

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: fontSize,
  },
  textMore: {
    color: Colors.grayBDB7B7,
  },
})
