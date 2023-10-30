import React from 'react'
import Svg, { Circle, Line, Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICProfileTabActive = ({ size = 24, color = '#000' }: IProps) => {
  return (
    <Svg height={size} width={size} viewBox="0 0 24 24" fill="rgb(0, 0, 0)">
      <Path
        d="M21.334 23H2.666a1 1 0 0 1-1-1v-1.354a6.279 6.279 0 0 1 6.272-6.272h8.124a6.279 6.279 0 0 1 6.271 6.271V22a1 1 0 0 1-1 1ZM12 13.269a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z"
        fill={color}
      />
    </Svg>
  )
}

export default ICProfileTabActive
