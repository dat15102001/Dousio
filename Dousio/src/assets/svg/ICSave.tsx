import React from 'react'
import Svg, { Circle, Line, Path, Polygon } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICSave = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <Polygon
        fill="none"
        points="20 21 12 13.44 4 21 4 3 20 3 20 21"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  )
}

export default ICSave
