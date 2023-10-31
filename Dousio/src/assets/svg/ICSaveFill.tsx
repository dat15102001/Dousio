import React from 'react'
import Svg, { Circle, Line, Path, Polygon } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICSaveFill = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <Path
        d="M20 22a.999.999 0 0 1-.687-.273L12 14.815l-7.313 6.912A1 1 0 0 1 3 21V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Z"
        fill="rgb(245, 245, 245)"
      />
    </Svg>
  )
}

export default ICSaveFill
