import React from 'react'
import Svg, { Circle, Line, Path, Polygon, Polyline } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICBack = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Line
        x1="2.909"
        y1="12.004"
        x2="22.001"
        y2="12.004"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <Polyline
        points="9.276 4.726 2.001 12.004 9.276 19.274"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  )
}

export default ICBack
