import React from 'react'
import Svg, { Circle, Line, Path, Polygon } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICComment = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Path
        d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  )
}

export default ICComment
