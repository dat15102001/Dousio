import React, { memo } from 'react'
import Box from './Box'

export interface IDotProps {
  size?: number
  color?: string
}
const Dot = ({size = 1, color = '#fff'}: IDotProps) => {
  // const { size, color } = props
  return <Box width={size} height={size} radius={size / 2} backgroundColor={color} />
}

export default memo(Dot)
