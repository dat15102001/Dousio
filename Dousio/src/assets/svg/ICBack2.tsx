import React from 'react'
import Svg, { Circle, Line, Path, Polygon, Polyline } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICBack2 = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg style={{transform: [{rotate:'270deg'}]}} width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M21 17.502a.997.997 0 0 1-.707-.293L12 8.913l-8.293 8.296a1 1 0 1 1-1.414-1.414l9-9.004a1.03 1.03 0 0 1 1.414 0l9 9.004A1 1 0 0 1 21 17.502Z"
        fill={color}
      />
    </Svg>
  )
}

export default ICBack2
