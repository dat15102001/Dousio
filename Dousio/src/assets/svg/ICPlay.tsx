import { moderateScale } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICPlay = ({ size = 20, color = '#ffffff' }: IProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
    >
      <Path
        d="M4.154 0C2.964 0 2 .951 2 2.125v13.75a2.12 2.12 0 0 0 1.138 1.874c.7.37 1.55.329 2.211-.106l9.693-6.875A2.117 2.117 0 0 0 16 9c0-.71-.36-1.374-.96-1.768L5.349.357A2.172 2.172 0 0 0 4.154 0z"
        fill={color}
      />
    </Svg>
  )
}

export default ICPlay
