import React from 'react'
import Svg, { Line, Rect } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICFeed = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Rect
        x="6"
        y="7"
        width="12"
        height="10"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Line
        x1="6.002"
        y1="3.004"
        x2="18"
        y2="3.004"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Line
        x1="6.002"
        y1="21"
        x2="18"
        y2="21"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  )
}

export default ICFeed
