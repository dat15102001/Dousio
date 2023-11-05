import { StyleSheet } from 'react-native'
import React from 'react'
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder'
import Box from '@/components/Box'
import { Colors } from '@/theme'

const MusicItemPlaceHolder = () => {
  return (
    <Placeholder
      Animation={props => (
        <Fade {...props} duration={1000} style={{ backgroundColor: Colors.gray606060 }} />
      )}
    >
      <Box row marginBottom={0}>
        <PlaceholderLine
          style={{ height: 60, width: 60, borderRadius: 8 }}
          color={Colors.gray262626}
        />
        <Box flex={1} justify='center'>
          <PlaceholderLine
            style={{ marginLeft: 6, height: 14, borderRadius: 2, width: '65%' }}
            color={Colors.gray262626}
          />
          <PlaceholderLine
            style={{ marginLeft: 6, borderRadius: 2, height: 14, width: '50%' }}
            color={Colors.gray262626}
          />
        </Box>
      </Box>
      <Box row marginBottom={0}>
        <PlaceholderLine
          style={{ height: 60, width: 60, borderRadius: 8 }}
          color={Colors.gray262626}
        />
        <Box flex={1} justify='center'>
          <PlaceholderLine
            style={{ marginLeft: 6, height: 14, borderRadius: 2, width: '65%' }}
            color={Colors.gray262626}
          />
          <PlaceholderLine
            style={{ marginLeft: 6, borderRadius: 2, height: 14, width: '50%' }}
            color={Colors.gray262626}
          />
        </Box>
      </Box>
      <Box row marginBottom={0}>
        <PlaceholderLine
          style={{ height: 60, width: 60, borderRadius: 8 }}
          color={Colors.gray262626}
        />
        <Box flex={1} justify='center'>
          <PlaceholderLine
            style={{ marginLeft: 6, height: 14, borderRadius: 2, width: '65%' }}
            color={Colors.gray262626}
          />
          <PlaceholderLine
            style={{ marginLeft: 6, borderRadius: 2, height: 14, width: '50%' }}
            color={Colors.gray262626}
          />
        </Box>
      </Box>
      <Box row marginBottom={0}>
        <PlaceholderLine
          style={{ height: 60, width: 60, borderRadius: 8 }}
          color={Colors.gray262626}
        />
        <Box flex={1} justify='center'>
          <PlaceholderLine
            style={{ marginLeft: 6, height: 14, borderRadius: 2, width: '65%' }}
            color={Colors.gray262626}
          />
          <PlaceholderLine
            style={{ marginLeft: 6, borderRadius: 2, height: 14, width: '50%' }}
            color={Colors.gray262626}
          />
        </Box>
      </Box>
      <Box row marginBottom={0}>
        <PlaceholderLine
          style={{ height: 60, width: 60, borderRadius: 8 }}
          color={Colors.gray262626}
        />
        <Box flex={1} justify='center'>
          <PlaceholderLine
            style={{ marginLeft: 6, height: 14, borderRadius: 2, width: '65%' }}
            color={Colors.gray262626}
          />
          <PlaceholderLine
            style={{ marginLeft: 6, borderRadius: 2, height: 14, width: '50%' }}
            color={Colors.gray262626}
          />
        </Box>
      </Box>
    </Placeholder>
  )
}

export default MusicItemPlaceHolder

const styles = StyleSheet.create({})
