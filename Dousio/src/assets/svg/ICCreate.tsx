import React from 'react'
import Svg, { Circle, Line, Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICCreate = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size}>
      <Path d="M12.001.504a11.5 11.5 0 1 0 11.5 11.5 11.513 11.513 0 0 0-11.5-11.5Zm5 12.5h-4v4a1 1 0 0 1-2 0v-4h-4a1 1 0 1 1 0-2h4v-4a1 1 0 1 1 2 0v4h4a1 1 0 0 1 0 2Z" />
    </Svg>
  )
}

export default ICCreate
