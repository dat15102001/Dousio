import React from 'react'
import Svg, { Line, Rect } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICGrid = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Rect
        x="3"
        y="3"
        width="18"
        height="18"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Line
        x1="9.015"
        y1="3"
        x2="9.015"
        y2="21"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Line
        x1="14.985"
        y1="3"
        x2="14.985"
        y2="21"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Line
        x1="21"
        y1="9.015"
        x2="3"
        y2="9.015"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Line
        x1="21"
        y1="14.985"
        x2="3"
        y2="14.985"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  )
}

export default ICGrid
