import React from 'react'
import Svg, { Circle, Line, Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICSearchTab = ({ size = 24, color = '#000' }: IProps) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="rgb(245, 245, 245)"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path
        d="M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z"
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
      <Line
        x1="16.511"
        y1="16.511"
        x2="22"
        y2="22"
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default ICSearchTab
