import { Colors, moderateScale } from '@/theme'
import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = ({ size = 24, color = Colors.black }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 489.8 489.8"
    height={moderateScale(size)}
    width={moderateScale(size)}
  >
    <Path
      fill={color}
      d="M438.2 0H51.6C23.1 0 0 23.2 0 51.6v386.6c0 28.5 23.2 51.6 51.6 51.6h386.6c28.5 0 51.6-23.2 51.6-51.6V51.6c0-28.4-23.2-51.6-51.6-51.6zm27.1 438.2c0 14.9-12.2 27.1-27.1 27.1H51.6c-14.9 0-27.1-12.2-27.1-27.1V51.6c0-14.9 12.2-27.1 27.1-27.1h386.6c14.9 0 27.1 12.2 27.1 27.1v386.6z"
    />
    <Path
      fill={color}
      d="M256.4 113c-.1-.2-.2-.3-.2-.5l-.6-1.2c-.2-.3-.4-.7-.6-1s-.5-.6-.7-.9c-.3-.3-.5-.6-.8-.9s-.5-.5-.8-.7c-.3-.3-.7-.5-1-.8-.3-.2-.6-.4-.9-.5-.4-.2-.8-.4-1.3-.6-.2-.1-.3-.2-.5-.2-.2-.1-.3-.1-.5-.1-.5-.1-.9-.3-1.4-.3-.3-.1-.7-.1-1-.2-.4 0-.8-.1-1.3-.1-.4 0-.8 0-1.2.1-.4 0-.7.1-1.1.2-.5.1-.9.2-1.3.3-.2.1-.3.1-.5.1-.2.1-.3.2-.5.2l-1.2.6c-.3.2-.6.4-.9.5-.4.2-.7.5-1 .8-.3.2-.6.5-.8.7-.3.3-.6.6-.8.9-.3.3-.5.6-.7.9s-.4.6-.6 1l-.6 1.2c-.1.2-.2.3-.2.5l-91.5 255.6c-2.3 6.4 1 13.4 7.4 15.7 1.4.5 2.8.7 4.1.7 5 0 9.7-3.1 11.5-8.1l26.2-73.3h106.3c.3 0 .6-.1 1-.1l26.2 73.4c1.8 5 6.5 8.1 11.5 8.1 1.4 0 2.8-.2 4.1-.7 6.4-2.3 9.7-9.3 7.4-15.7L256.4 113zM200 279l44.9-125.5L289.8 279H200z"
    />
  </Svg>
)

export default SvgComponent
