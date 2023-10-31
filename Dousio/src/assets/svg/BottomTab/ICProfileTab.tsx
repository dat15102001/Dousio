import React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICProfileTab = ({ size = 24, color = '#000' }: IProps) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill="rgb(0, 0, 0)"
    >
      <Path
        d="M2.667 22v-1.355a5.271 5.271 0 0 1 5.271-5.271h8.124a5.271 5.271 0 0 1 5.271 5.271V22"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
      <Circle
        cx="12"
        cy="7.268"
        r="5"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeMiterlimit={10}
        strokeWidth={2}
      />
    </Svg>
  )
}

export default ICProfileTab
