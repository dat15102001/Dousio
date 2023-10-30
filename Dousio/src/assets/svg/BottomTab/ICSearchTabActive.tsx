import React from 'react'
import Svg, { Circle, Line, Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICSearchTabActive = ({ size = 24, color = '#000' }: IProps) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="rgb(245, 245, 245)"
    >
      <Path
        d="M18.5 10.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      />
      <Line
        x1="16.511"
        y1="16.511"
        x2="21.643"
        y2="21.643"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
      />
    </Svg>
  )
}

export default ICSearchTabActive
