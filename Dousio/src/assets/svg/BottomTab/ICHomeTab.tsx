import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICHomeTab = ({ size = 24, color = '#000' }: IProps) => {
  return (
    <Svg fill="#f5f5f5" height={size} viewBox="0 0 24 24" width={size}>
      <Path
        d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth={2}
      />
    </Svg>
  )
}

export default ICHomeTab
