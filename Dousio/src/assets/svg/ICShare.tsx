import React from 'react'
import Svg, { Circle, Line, Path, Polygon } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICShare = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Line
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
        x1="22"
        x2="9.218"
        y1="3"
        y2="10.083"
      />
      <Polygon
        fill="none"
        points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  )
}

export default ICShare
