import React from 'react'
import Svg, { Circle, Line, Path, Polygon, Polyline } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICDelete = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg viewBox="0 0 64 64" width={size} height={size}>
      <Path
        d="M49.5 16.5L33.5 32.5L49.5 48.5"
        fill="none"
        stroke={color}
        strokeWidth="8"
      />
      <Path
        d="M14.5 16.5L30.5 32.5L14.5 48.5"
        fill="none"
        stroke={color}
        strokeWidth="8"
      />
    </Svg>
  )
}

export default ICDelete
