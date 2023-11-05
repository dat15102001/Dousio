import { moderateScale } from '@/theme'
import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICPlay = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 12 13" fill="none">
      <Path
        d="M3.07853 1.77736C2.61267 1.47788 2 1.81237 2 2.36618V10.6335C2 11.1873 2.61267 11.5218 3.07853 11.2223L9.50868 7.08868C9.93731 6.81313 9.9373 6.18657 9.50868 5.91103L3.07853 1.77736Z"
        fill={color}
      />
    </Svg>
  )
}

export default ICPlay
