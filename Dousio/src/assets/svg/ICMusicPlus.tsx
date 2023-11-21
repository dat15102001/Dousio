import React from 'react'
import Svg, { Defs, Path, Polygon, Rect } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICMusicPlus = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Polygon
        fill={color}
        points="30 6 26 6 26 2 24 2 24 6 20 6 20 8 24 8 24 12 26 12 26 8 30 8 30 6"
      />
      <Path
        fill={color}
        d="M24,15v7.5562A3.9552,3.9552,0,0,0,22,22a4,4,0,1,0,4,4V15ZM22,28a2,2,0,1,1,2-2A2.0027,2.0027,0,0,1,22,28Z"
      />
      <Path
        fill={color}
        d="M17,6H10A2.002,2.002,0,0,0,8,8V22.5562A3.9557,3.9557,0,0,0,6,22a4,4,0,1,0,4,4V8h7ZM6,28a2,2,0,1,1,2-2A2.0023,2.0023,0,0,1,6,28Z"
      />
    </Svg>
  )
}

export default ICMusicPlus
