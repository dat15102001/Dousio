import React from 'react'
import Svg, { Path } from 'react-native-svg'

interface IProps {
  size?: number
  color?: string
}

const ICNext = ({ size = 24, color = '#ffffff' }: IProps) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 17 18" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 1.83232C0 0.658405 1.35791 0.00576526 2.27457 0.739099L11.2343 7.90685C11.9348 8.46731 11.9348 9.53283 11.2343 10.0933L2.27457 17.261C1.3579 17.9944 0 17.3417 0 16.1678V1.83232ZM16.25 2.00006C16.25 1.30971 15.6904 0.750065 15 0.750065C14.3096 0.750065 13.75 1.30971 13.75 2.00006V16.0001C13.75 16.6904 14.3096 17.2501 15 17.2501C15.6904 17.2501 16.25 16.6904 16.25 16.0001V2.00006Z"
        fill={color}
      />
    </Svg>
  )
}

export default ICNext
