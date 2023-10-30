import React from 'react'
import Svg, { Circle } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICThreeDotHorizontal = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Circle cx="12" cy="12" r="1.5" />
      <Circle cx="6" cy="12" r="1.5" />
      <Circle cx="18" cy="12" r="1.5" />
    </Svg>
  )
}

export default ICThreeDotHorizontal
