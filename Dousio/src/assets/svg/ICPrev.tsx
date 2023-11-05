import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICPrev = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.7253 0.7391C15.642 0.00576365 16.9999 0.658409 16.9999 1.83232V16.1678C16.9999 17.3417 15.642 17.9944 14.7253 17.261L5.76566 10.0933C5.06509 9.53283 5.06509 8.46731 5.76566 7.90685L14.7253 0.7391ZM3.25 2.00007C3.25 1.30971 2.69036 0.750067 2 0.750067C1.30964 0.750067 0.75 1.30971 0.75 2.00007V16.0001C0.75 16.6904 1.30964 17.2501 2 17.2501C2.69036 17.2501 3.25 16.6904 3.25 16.0001V2.00007Z"
        fill={color}
      />
    </Svg>
  )
}

export default ICPrev
