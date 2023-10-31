import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICPauseVideo = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M9.33331 4.66663C8.22874 4.66663 7.33331 5.56206 7.33331 6.66663V25.3333C7.33331 26.4379 8.22874 27.3333 9.33331 27.3333H12C13.1045 27.3333 14 26.4379 14 25.3333V6.66663C14 5.56206 13.1045 4.66663 12 4.66663H9.33331Z"
        fill={color}
      />
      <Path
        d="M20 4.66663C18.8954 4.66663 18 5.56206 18 6.66663V25.3333C18 26.4379 18.8954 27.3333 20 27.3333H22.6666C23.7712 27.3333 24.6666 26.4379 24.6666 25.3333V6.66663C24.6666 5.56206 23.7712 4.66663 22.6666 4.66663H20Z"
        fill={color}
      />
    </Svg>
  )
}

export default ICPauseVideo
